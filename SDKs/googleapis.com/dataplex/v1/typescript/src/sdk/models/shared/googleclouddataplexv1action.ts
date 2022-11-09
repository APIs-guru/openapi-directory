import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1ActionFailedSecurityPolicyApply } from "./googleclouddataplexv1actionfailedsecuritypolicyapply";
import { GoogleCloudDataplexV1ActionIncompatibleDataSchema } from "./googleclouddataplexv1actionincompatibledataschema";
import { GoogleCloudDataplexV1ActionInvalidDataFormat } from "./googleclouddataplexv1actioninvaliddataformat";
import { GoogleCloudDataplexV1ActionInvalidDataPartition } from "./googleclouddataplexv1actioninvaliddatapartition";

export enum GoogleCloudDataplexV1ActionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    ResourceManagement = "RESOURCE_MANAGEMENT"
,    SecurityPolicy = "SECURITY_POLICY"
,    DataDiscovery = "DATA_DISCOVERY"
}


// GoogleCloudDataplexV1Action
/** 
 * Action represents an issue requiring administrator action for resolution.
**/
export class GoogleCloudDataplexV1Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: string;

  @Metadata({ data: "json, name=category" })
  category?: GoogleCloudDataplexV1ActionCategoryEnum;

  @Metadata({ data: "json, name=dataLocations" })
  dataLocations?: string[];

  @Metadata({ data: "json, name=detectTime" })
  detectTime?: string;

  @Metadata({ data: "json, name=failedSecurityPolicyApply" })
  failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;

  @Metadata({ data: "json, name=incompatibleDataSchema" })
  incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema;

  @Metadata({ data: "json, name=invalidDataFormat" })
  invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat;

  @Metadata({ data: "json, name=invalidDataOrganization" })
  invalidDataOrganization?: Map<string, any>;

  @Metadata({ data: "json, name=invalidDataPartition" })
  invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition;

  @Metadata({ data: "json, name=issue" })
  issue?: string;

  @Metadata({ data: "json, name=lake" })
  lake?: string;

  @Metadata({ data: "json, name=missingData" })
  missingData?: Map<string, any>;

  @Metadata({ data: "json, name=missingResource" })
  missingResource?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=unauthorizedResource" })
  unauthorizedResource?: Map<string, any>;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
