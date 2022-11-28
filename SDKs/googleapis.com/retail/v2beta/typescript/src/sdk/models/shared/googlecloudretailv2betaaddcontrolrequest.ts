import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaAddControlRequest
/** 
 * Request for AddControl method.
**/
export class GoogleCloudRetailV2betaAddControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlId" })
  controlId?: string;
}
