import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2UserEvent } from "./googlecloudretailv2userevent";


// GoogleCloudRetailV2PredictRequest
/** 
 * Request message for Predict method.
**/
export class GoogleCloudRetailV2PredictRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=userEvent" })
  userEvent?: GoogleCloudRetailV2UserEvent;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
