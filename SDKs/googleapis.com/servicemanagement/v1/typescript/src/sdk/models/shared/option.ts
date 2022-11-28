import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Option
/** 
 * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
**/
export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
