import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// Attributes
/** 
 * A set of attributes as key-value pairs.
**/
export class Attributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeMap", elemType: shared.AttributeValue })
  attributeMap?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=droppedAttributesCount" })
  droppedAttributesCount?: number;
}
