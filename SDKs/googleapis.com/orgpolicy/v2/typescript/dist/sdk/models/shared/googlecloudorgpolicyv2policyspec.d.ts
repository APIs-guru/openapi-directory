import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV2PolicySpecPolicyRule } from "./googlecloudorgpolicyv2policyspecpolicyrule";
/**
 * Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export declare class GoogleCloudOrgpolicyV2PolicySpec extends SpeakeasyBase {
    etag?: string;
    inheritFromParent?: boolean;
    reset?: boolean;
    rules?: GoogleCloudOrgpolicyV2PolicySpecPolicyRule[];
    updateTime?: string;
}
