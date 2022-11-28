import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedSourceContext } from "./extendedsourcecontext";
import { SourceContext } from "./sourcecontext";
import { StatusMessage } from "./statusmessage";


export enum DebuggeeCanaryModeEnum {
    CanaryModeUnspecified = "CANARY_MODE_UNSPECIFIED",
    CanaryModeAlwaysEnabled = "CANARY_MODE_ALWAYS_ENABLED",
    CanaryModeAlwaysDisabled = "CANARY_MODE_ALWAYS_DISABLED",
    CanaryModeDefaultEnabled = "CANARY_MODE_DEFAULT_ENABLED",
    CanaryModeDefaultDisabled = "CANARY_MODE_DEFAULT_DISABLED"
}


// Debuggee
/** 
 * Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
**/
export class Debuggee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=canaryMode" })
  canaryMode?: DebuggeeCanaryModeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extSourceContexts", elemType: ExtendedSourceContext })
  extSourceContexts?: ExtendedSourceContext[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInactive" })
  isInactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceContexts", elemType: SourceContext })
  sourceContexts?: SourceContext[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusMessage;

  @SpeakeasyMetadata({ data: "json, name=uniquifier" })
  uniquifier?: string;
}
