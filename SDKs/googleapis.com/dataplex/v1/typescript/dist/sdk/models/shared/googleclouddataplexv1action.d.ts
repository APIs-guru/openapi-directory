import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ActionFailedSecurityPolicyApply } from "./googleclouddataplexv1actionfailedsecuritypolicyapply";
import { GoogleCloudDataplexV1ActionIncompatibleDataSchema } from "./googleclouddataplexv1actionincompatibledataschema";
import { GoogleCloudDataplexV1ActionInvalidDataFormat } from "./googleclouddataplexv1actioninvaliddataformat";
import { GoogleCloudDataplexV1ActionInvalidDataPartition } from "./googleclouddataplexv1actioninvaliddatapartition";
export declare enum GoogleCloudDataplexV1ActionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    ResourceManagement = "RESOURCE_MANAGEMENT",
    SecurityPolicy = "SECURITY_POLICY",
    DataDiscovery = "DATA_DISCOVERY"
}
/**
 * Action represents an issue requiring administrator action for resolution.
**/
export declare class GoogleCloudDataplexV1Action extends SpeakeasyBase {
    asset?: string;
    category?: GoogleCloudDataplexV1ActionCategoryEnum;
    dataLocations?: string[];
    detectTime?: string;
    failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;
    incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema;
    invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat;
    invalidDataOrganization?: Map<string, any>;
    invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition;
    issue?: string;
    lake?: string;
    missingData?: Map<string, any>;
    missingResource?: Map<string, any>;
    name?: string;
    unauthorizedResource?: Map<string, any>;
    zone?: string;
}
