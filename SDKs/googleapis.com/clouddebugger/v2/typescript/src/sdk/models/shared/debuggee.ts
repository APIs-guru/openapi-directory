import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExtendedSourceContext } from "./extendedsourcecontext";
import { SourceContext } from "./sourcecontext";
import { StatusMessage } from "./statusmessage";

export enum DebuggeeCanaryModeEnum {
    CanaryModeUnspecified = "CANARY_MODE_UNSPECIFIED"
,    CanaryModeAlwaysEnabled = "CANARY_MODE_ALWAYS_ENABLED"
,    CanaryModeAlwaysDisabled = "CANARY_MODE_ALWAYS_DISABLED"
,    CanaryModeDefaultEnabled = "CANARY_MODE_DEFAULT_ENABLED"
,    CanaryModeDefaultDisabled = "CANARY_MODE_DEFAULT_DISABLED"
}


// Debuggee
/** 
 * Represents the debugged application. The application may include one or more replicated processes executing the same code. Each of these processes is attached with a debugger agent, carrying out the debugging commands. Agents attached to the same debuggee identify themselves as such by using exactly the same Debuggee message value when registering.
**/
export class Debuggee extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentVersion" })
  agentVersion?: string;

  @Metadata({ data: "json, name=canaryMode" })
  canaryMode?: DebuggeeCanaryModeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extSourceContexts", elemType: shared.ExtendedSourceContext })
  extSourceContexts?: ExtendedSourceContext[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @Metadata({ data: "json, name=isInactive" })
  isInactive?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=sourceContexts", elemType: shared.SourceContext })
  sourceContexts?: SourceContext[];

  @Metadata({ data: "json, name=status" })
  status?: StatusMessage;

  @Metadata({ data: "json, name=uniquifier" })
  uniquifier?: string;
}
