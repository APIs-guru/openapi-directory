import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeInput } from "./attribute";
import { Attribute } from "./attribute";



// AttributesInput
/** 
 * A container for all the attributes for a given location.
**/
export class AttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AttributeInput })
  attributes?: AttributeInput[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Attributes
/** 
 * A container for all the attributes for a given location.
**/
export class Attributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
