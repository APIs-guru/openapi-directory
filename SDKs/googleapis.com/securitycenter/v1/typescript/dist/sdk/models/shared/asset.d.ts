import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicy } from "./iampolicy";
import { SecurityCenterProperties } from "./securitycenterproperties";
import { SecurityMarks } from "./securitymarks";
/**
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
**/
export declare class Asset extends SpeakeasyBase {
    canonicalName?: string;
    createTime?: string;
    iamPolicy?: IamPolicy;
    name?: string;
    resourceProperties?: Map<string, any>;
    securityCenterProperties?: SecurityCenterProperties;
    securityMarks?: SecurityMarks;
    updateTime?: string;
}
