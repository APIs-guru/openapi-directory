import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRemoveControlRequest
/** 
 * Request for RemoveControl method.
**/
export class GoogleCloudRetailV2betaRemoveControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlId" })
  controlId?: string;
}
