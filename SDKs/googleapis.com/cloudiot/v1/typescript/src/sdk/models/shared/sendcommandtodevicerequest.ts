import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendCommandToDeviceRequest
/** 
 * Request for `SendCommandToDevice`.
**/
export class SendCommandToDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @Metadata({ data: "json, name=subfolder" })
  subfolder?: string;
}
