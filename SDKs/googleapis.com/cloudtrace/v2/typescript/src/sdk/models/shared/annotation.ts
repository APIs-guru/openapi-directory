import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";



// Annotation
/** 
 * Text annotation with a set of attributes.
**/
export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: TruncatableString;
}
