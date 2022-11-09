import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
import { Word } from "./word";


// Paragraph
/** 
 * Structural unit of text representing a number of words in certain order.
**/
export class Paragraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=property" })
  property?: TextProperty;

  @Metadata({ data: "json, name=words", elemType: shared.Word })
  words?: Word[];
}
