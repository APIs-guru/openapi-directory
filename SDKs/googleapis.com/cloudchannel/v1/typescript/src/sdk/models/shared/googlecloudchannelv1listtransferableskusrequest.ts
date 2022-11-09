import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1ListTransferableSkusRequest
/** 
 * Request message for CloudChannelService.ListTransferableSkus
**/
export class GoogleCloudChannelV1ListTransferableSkusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authToken" })
  authToken?: string;

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
}
