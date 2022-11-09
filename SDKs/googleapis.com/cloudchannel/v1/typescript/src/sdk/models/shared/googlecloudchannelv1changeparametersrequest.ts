import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Parameter } from "./googlecloudchannelv1parameter";


// GoogleCloudChannelV1ChangeParametersRequest
/** 
 * Request message for CloudChannelService.ChangeParametersRequest.
**/
export class GoogleCloudChannelV1ChangeParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudChannelV1Parameter })
  parameters?: GoogleCloudChannelV1Parameter[];

  @Metadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
