import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1ProvisionedService
/** 
 * Service provisioned for an entitlement.
**/
export class GoogleCloudChannelV1ProvisionedService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningId" })
  provisioningId?: string;

  @SpeakeasyMetadata({ data: "json, name=skuId" })
  skuId?: string;
}
