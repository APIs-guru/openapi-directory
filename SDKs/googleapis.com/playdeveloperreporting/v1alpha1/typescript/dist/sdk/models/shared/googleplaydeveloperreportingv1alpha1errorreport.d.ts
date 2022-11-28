import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    ApplicationNotResponding = "APPLICATION_NOT_RESPONDING",
    Crash = "CRASH"
}
/**
 * An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
export declare class GooglePlayDeveloperReportingV1alpha1ErrorReport extends SpeakeasyBase {
    issue?: string;
    name?: string;
    reportText?: string;
    type?: GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum;
}
