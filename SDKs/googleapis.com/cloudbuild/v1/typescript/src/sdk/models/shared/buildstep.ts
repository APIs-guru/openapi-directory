import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeSpan } from "./timespan";
import { TimeSpan } from "./timespan";
import { Volume } from "./volume";

export enum BuildStepStatusEnum {
    StatusUnknown = "STATUS_UNKNOWN"
,    Pending = "PENDING"
,    Queued = "QUEUED"
,    Working = "WORKING"
,    Success = "SUCCESS"
,    Failure = "FAILURE"
,    InternalError = "INTERNAL_ERROR"
,    Timeout = "TIMEOUT"
,    Cancelled = "CANCELLED"
,    Expired = "EXPIRED"
}


// BuildStep
/** 
 * A step in the build pipeline.
**/
export class BuildStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowExitCodes" })
  allowExitCodes?: number[];

  @Metadata({ data: "json, name=allowFailure" })
  allowFailure?: boolean;

  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=dir" })
  dir?: string;

  @Metadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @Metadata({ data: "json, name=env" })
  env?: string[];

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pullTiming" })
  pullTiming?: TimeSpan;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=secretEnv" })
  secretEnv?: string[];

  @Metadata({ data: "json, name=status" })
  status?: BuildStepStatusEnum;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=timing" })
  timing?: TimeSpan;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];

  @Metadata({ data: "json, name=waitFor" })
  waitFor?: string[];
}
