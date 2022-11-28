import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";



// Symbol
/** 
 * A single symbol representation.
**/
export class Symbol extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: TextProperty;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
