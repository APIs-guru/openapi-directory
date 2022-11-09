import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserDefinedField
/** 
 * A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
 * 
**/
export class UserDefinedField extends SpeakeasyBase {
  @Metadata({ data: "json, name=default" })
  default?: string;

  @Metadata({ data: "json, name=example" })
  example: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=manyOf" })
  manyOf?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=oneOf" })
  oneOf?: string;
}
