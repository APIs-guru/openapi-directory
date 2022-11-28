import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1ListTransferableOffersRequest
/** 
 * Request message for CloudChannelService.ListTransferableOffers
**/
export class GoogleCloudChannelV1ListTransferableOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudIdentityId" })
  cloudIdentityId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}
