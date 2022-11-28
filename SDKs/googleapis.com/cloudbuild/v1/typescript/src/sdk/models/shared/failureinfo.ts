import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FailureInfoTypeEnum {
    FailureTypeUnspecified = "FAILURE_TYPE_UNSPECIFIED",
    PushFailed = "PUSH_FAILED",
    PushImageNotFound = "PUSH_IMAGE_NOT_FOUND",
    PushNotAuthorized = "PUSH_NOT_AUTHORIZED",
    LoggingFailure = "LOGGING_FAILURE",
    UserBuildStep = "USER_BUILD_STEP",
    FetchSourceFailed = "FETCH_SOURCE_FAILED"
}


// FailureInfo
/** 
 * A fatal problem encountered during the execution of the build.
**/
export class FailureInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FailureInfoTypeEnum;
}
