import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    ApplicationNotResponding = "APPLICATION_NOT_RESPONDING",
    Crash = "CRASH"
}


// GooglePlayDeveloperReportingV1alpha1ErrorReport
/** 
 * An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
export class GooglePlayDeveloperReportingV1alpha1ErrorReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportText" })
  reportText?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum;
}
