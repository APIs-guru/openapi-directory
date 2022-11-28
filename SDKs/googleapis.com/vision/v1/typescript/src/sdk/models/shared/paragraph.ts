import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
import { Word } from "./word";



// Paragraph
/** 
 * Structural unit of text representing a number of words in certain order.
**/
export class Paragraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: TextProperty;

  @SpeakeasyMetadata({ data: "json, name=words", elemType: Word })
  words?: Word[];
}
