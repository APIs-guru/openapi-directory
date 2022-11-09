import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Option
/** 
 * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
**/
export class Option extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
