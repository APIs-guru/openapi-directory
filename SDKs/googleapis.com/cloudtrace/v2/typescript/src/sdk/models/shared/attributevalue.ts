import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TruncatableString } from "./truncatablestring";



// AttributeValue
/** 
 * The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.
**/
export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: TruncatableString;
}
