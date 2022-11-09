import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";


// Symbol
/** 
 * A single symbol representation.
**/
export class Symbol extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=property" })
  property?: TextProperty;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
