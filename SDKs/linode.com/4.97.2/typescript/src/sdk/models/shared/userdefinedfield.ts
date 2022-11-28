import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserDefinedField
/** 
 * A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
 * 
**/
export class UserDefinedField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: string;

  @SpeakeasyMetadata({ data: "json, name=example" })
  example: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=manyOf" })
  manyOf?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=oneOf" })
  oneOf?: string;
}
