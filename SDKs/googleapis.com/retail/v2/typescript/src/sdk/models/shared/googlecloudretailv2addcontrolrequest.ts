import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2AddControlRequest
/** 
 * Request for AddControl method.
**/
export class GoogleCloudRetailV2AddControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlId" })
  controlId?: string;
}
