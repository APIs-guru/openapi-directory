import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RemoveControlRequest
/** 
 * Request for RemoveControl method.
**/
export class GoogleCloudRetailV2RemoveControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlId" })
  controlId?: string;
}
