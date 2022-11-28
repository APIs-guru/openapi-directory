import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedSourceContext } from "./extendedsourcecontext";
import { SourceContext } from "./sourcecontext";
import { StatusMessage } from "./statusmessage";
export declare enum DebuggeeCanaryModeEnum {
    CanaryModeUnspecified = "CANARY_MODE_UNSPECIFIED",
    CanaryModeAlwaysEnabled = "CANARY_MODE_ALWAYS_ENABLED",
    CanaryModeAlwaysDisabled = "CANARY_MODE_ALWAYS_DISABLED",
    CanaryModeDefaultEnabled = "CANARY_MODE_DEFAULT_ENABLED",
    CanaryModeDefaultDisabled = "CANARY_MODE_DEFAULT_DISABLED"
}
/**
 * Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
**/
export declare class Debuggee extends SpeakeasyBase {
    agentVersion?: string;
    canaryMode?: DebuggeeCanaryModeEnum;
    description?: string;
    extSourceContexts?: ExtendedSourceContext[];
    id?: string;
    isDisabled?: boolean;
    isInactive?: boolean;
    labels?: Map<string, string>;
    project?: string;
    sourceContexts?: SourceContext[];
    status?: StatusMessage;
    uniquifier?: string;
}
