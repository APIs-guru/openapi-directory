import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
import { Symbol } from "./symbol";



// Word
/** 
 * A word representation.
**/
export class Word extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: TextProperty;

  @SpeakeasyMetadata({ data: "json, name=symbols", elemType: Symbol })
  symbols?: Symbol[];
}
