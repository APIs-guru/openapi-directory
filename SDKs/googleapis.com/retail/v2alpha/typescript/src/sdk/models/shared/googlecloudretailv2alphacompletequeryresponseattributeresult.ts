import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult
/** 
 * Resource that represents attribute results.
**/
export class GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestions" })
  suggestions?: string[];
}
