import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";


// Annotation
/** 
 * Text annotation with a set of attributes.
**/
export class Annotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @Metadata({ data: "json, name=description" })
  description?: TruncatableString;
}
