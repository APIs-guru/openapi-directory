import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaRemoveControlRequest
/** 
 * Request for RemoveControl method.
**/
export class GoogleCloudRetailV2alphaRemoveControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlId" })
  controlId?: string;
}
