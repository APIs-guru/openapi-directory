import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2PolicySpecInput } from "./googlecloudorgpolicyv2policyspec";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";
/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
export declare class GoogleCloudOrgpolicyV2AlternatePolicySpecInput extends SpeakeasyBase {
    launch?: string;
    spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}
/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
export declare class GoogleCloudOrgpolicyV2AlternatePolicySpec extends SpeakeasyBase {
    launch?: string;
    spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
