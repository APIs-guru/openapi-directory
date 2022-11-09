import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1ListTransferableOffersRequest
/** 
 * Request message for CloudChannelService.ListTransferableOffers
**/
export class GoogleCloudChannelV1ListTransferableOffersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudIdentityId" })
  cloudIdentityId?: string;

  @Metadata({ data: "json, name=customerName" })
  customerName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}
