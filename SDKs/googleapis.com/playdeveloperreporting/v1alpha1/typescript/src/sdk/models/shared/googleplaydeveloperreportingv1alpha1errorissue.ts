import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED"
,    ApplicationNotResponding = "APPLICATION_NOT_RESPONDING"
,    Crash = "CRASH"
}


// GooglePlayDeveloperReportingV1alpha1ErrorIssue
/** 
 * A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
export class GooglePlayDeveloperReportingV1alpha1ErrorIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum;
}
