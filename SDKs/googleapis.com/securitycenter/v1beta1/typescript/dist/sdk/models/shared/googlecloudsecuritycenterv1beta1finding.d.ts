import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";
export declare enum GoogleCloudSecuritycenterV1beta1FindingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
**/
export declare class GoogleCloudSecuritycenterV1beta1Finding extends SpeakeasyBase {
    category?: string;
    createTime?: string;
    eventTime?: string;
    externalUri?: string;
    name?: string;
    parent?: string;
    resourceName?: string;
    securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
    sourceProperties?: Map<string, any>;
    state?: GoogleCloudSecuritycenterV1beta1FindingStateEnum;
}
