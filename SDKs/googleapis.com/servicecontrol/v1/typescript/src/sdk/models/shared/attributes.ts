import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// Attributes
/** 
 * A set of attributes, each in the format `[KEY]:[VALUE]`.
**/
export class Attributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeMap", elemType: AttributeValue })
  attributeMap?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=droppedAttributesCount" })
  droppedAttributesCount?: number;
}
