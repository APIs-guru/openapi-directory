import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomField
/** 
 * Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
**/
export class CustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
