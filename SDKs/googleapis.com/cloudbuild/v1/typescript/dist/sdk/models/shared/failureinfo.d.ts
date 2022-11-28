import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FailureInfoTypeEnum {
    FailureTypeUnspecified = "FAILURE_TYPE_UNSPECIFIED",
    PushFailed = "PUSH_FAILED",
    PushImageNotFound = "PUSH_IMAGE_NOT_FOUND",
    PushNotAuthorized = "PUSH_NOT_AUTHORIZED",
    LoggingFailure = "LOGGING_FAILURE",
    UserBuildStep = "USER_BUILD_STEP",
    FetchSourceFailed = "FETCH_SOURCE_FAILED"
}
/**
 * A fatal problem encountered during the execution of the build.
**/
export declare class FailureInfo extends SpeakeasyBase {
    detail?: string;
    type?: FailureInfoTypeEnum;
}
