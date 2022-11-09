import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TruncatableString } from "./truncatablestring";


// AttributeValue
/** 
 * The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.
**/
export class AttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: TruncatableString;
}
