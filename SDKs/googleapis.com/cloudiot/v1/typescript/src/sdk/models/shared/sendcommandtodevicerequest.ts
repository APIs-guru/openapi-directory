import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendCommandToDeviceRequest
/** 
 * Request for `SendCommandToDevice`.
**/
export class SendCommandToDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @SpeakeasyMetadata({ data: "json, name=subfolder" })
  subfolder?: string;
}
