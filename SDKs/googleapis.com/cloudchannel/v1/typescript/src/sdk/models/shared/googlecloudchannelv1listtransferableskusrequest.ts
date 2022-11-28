import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1ListTransferableSkusRequest
/** 
 * Request message for CloudChannelService.ListTransferableSkus
**/
export class GoogleCloudChannelV1ListTransferableSkusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authToken" })
  authToken?: string;

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
}
