import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaDocumentInfo
/** 
 * Detailed document information associated with a user event.
**/
export class GoogleCloudDiscoveryengineV1alphaDocumentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionIds" })
  promotionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
