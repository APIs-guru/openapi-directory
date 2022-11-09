import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomField
/** 
 * Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.
**/
export class CustomField extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
