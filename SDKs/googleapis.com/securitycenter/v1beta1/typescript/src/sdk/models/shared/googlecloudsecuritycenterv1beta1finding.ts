import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";

export enum GoogleCloudSecuritycenterV1beta1FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// GoogleCloudSecuritycenterV1beta1Finding
/** 
 * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
**/
export class GoogleCloudSecuritycenterV1beta1Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @Metadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=securityMarks" })
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;

  @Metadata({ data: "json, name=sourceProperties" })
  sourceProperties?: Map<string, any>;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudSecuritycenterV1beta1FindingStateEnum;
}
