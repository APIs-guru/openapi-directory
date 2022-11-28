import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
import { Volume } from "./volume";


export enum BuildStepStatusEnum {
    StatusUnknown = "STATUS_UNKNOWN",
    Pending = "PENDING",
    Queued = "QUEUED",
    Working = "WORKING",
    Success = "SUCCESS",
    Failure = "FAILURE",
    InternalError = "INTERNAL_ERROR",
    Timeout = "TIMEOUT",
    Cancelled = "CANCELLED",
    Expired = "EXPIRED"
}


// BuildStep
/** 
 * A step in the build pipeline.
**/
export class BuildStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowExitCodes" })
  allowExitCodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=allowFailure" })
  allowFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=dir" })
  dir?: string;

  @SpeakeasyMetadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string[];

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pullTiming" })
  pullTiming?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=secretEnv" })
  secretEnv?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BuildStepStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];

  @SpeakeasyMetadata({ data: "json, name=waitFor" })
  waitFor?: string[];
}


// BuildStepInput
/** 
 * A step in the build pipeline.
**/
export class BuildStepInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowExitCodes" })
  allowExitCodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=allowFailure" })
  allowFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=dir" })
  dir?: string;

  @SpeakeasyMetadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @SpeakeasyMetadata({ data: "json, name=env" })
  env?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pullTiming" })
  pullTiming?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=secretEnv" })
  secretEnv?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];

  @SpeakeasyMetadata({ data: "json, name=waitFor" })
  waitFor?: string[];
}
