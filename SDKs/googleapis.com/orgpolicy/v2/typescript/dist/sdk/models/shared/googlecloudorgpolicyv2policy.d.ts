import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2AlternatePolicySpec } from "./googlecloudorgpolicyv2alternatepolicyspec";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";
import { GoogleCloudOrgpolicyV2AlternatePolicySpecInput } from "./googlecloudorgpolicyv2alternatepolicyspec";
import { GoogleCloudOrgpolicyV2PolicySpecInput } from "./googlecloudorgpolicyv2policyspec";
/**
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export declare class GoogleCloudOrgpolicyV2Policy extends SpeakeasyBase {
    alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec;
    name?: string;
    spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
/**
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export declare class GoogleCloudOrgpolicyV2PolicyInput extends SpeakeasyBase {
    alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpecInput;
    name?: string;
    spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}
