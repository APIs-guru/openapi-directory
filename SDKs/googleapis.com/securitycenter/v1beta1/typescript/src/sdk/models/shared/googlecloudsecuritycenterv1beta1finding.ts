import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";


export enum GoogleCloudSecuritycenterV1beta1FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// GoogleCloudSecuritycenterV1beta1Finding
/** 
 * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
**/
export class GoogleCloudSecuritycenterV1beta1Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityMarks" })
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;

  @SpeakeasyMetadata({ data: "json, name=sourceProperties" })
  sourceProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudSecuritycenterV1beta1FindingStateEnum;
}
