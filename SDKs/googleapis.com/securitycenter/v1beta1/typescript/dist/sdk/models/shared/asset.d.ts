import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityCenterProperties } from "./securitycenterproperties";
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";
/**
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
**/
export declare class Asset extends SpeakeasyBase {
    createTime?: string;
    name?: string;
    resourceProperties?: Map<string, any>;
    securityCenterProperties?: SecurityCenterProperties;
    securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
    updateTime?: string;
}
