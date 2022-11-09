import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1ProvisionedService
/** 
 * Service provisioned for an entitlement.
**/
export class GoogleCloudChannelV1ProvisionedService extends SpeakeasyBase {
  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=provisioningId" })
  provisioningId?: string;

  @Metadata({ data: "json, name=skuId" })
  skuId?: string;
}
