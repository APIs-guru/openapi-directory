import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ActionFailedSecurityPolicyApply } from "./googleclouddataplexv1actionfailedsecuritypolicyapply";
import { GoogleCloudDataplexV1ActionIncompatibleDataSchema } from "./googleclouddataplexv1actionincompatibledataschema";
import { GoogleCloudDataplexV1ActionInvalidDataFormat } from "./googleclouddataplexv1actioninvaliddataformat";
import { GoogleCloudDataplexV1ActionInvalidDataPartition } from "./googleclouddataplexv1actioninvaliddatapartition";


export enum GoogleCloudDataplexV1ActionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    ResourceManagement = "RESOURCE_MANAGEMENT",
    SecurityPolicy = "SECURITY_POLICY",
    DataDiscovery = "DATA_DISCOVERY"
}


// GoogleCloudDataplexV1Action
/** 
 * Action represents an issue requiring administrator action for resolution.
**/
export class GoogleCloudDataplexV1Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: GoogleCloudDataplexV1ActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=dataLocations" })
  dataLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=detectTime" })
  detectTime?: string;

  @SpeakeasyMetadata({ data: "json, name=failedSecurityPolicyApply" })
  failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;

  @SpeakeasyMetadata({ data: "json, name=incompatibleDataSchema" })
  incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema;

  @SpeakeasyMetadata({ data: "json, name=invalidDataFormat" })
  invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat;

  @SpeakeasyMetadata({ data: "json, name=invalidDataOrganization" })
  invalidDataOrganization?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=invalidDataPartition" })
  invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: string;

  @SpeakeasyMetadata({ data: "json, name=lake" })
  lake?: string;

  @SpeakeasyMetadata({ data: "json, name=missingData" })
  missingData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=missingResource" })
  missingResource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=unauthorizedResource" })
  unauthorizedResource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
