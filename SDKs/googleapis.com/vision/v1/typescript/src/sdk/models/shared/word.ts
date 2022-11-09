import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
import { Symbol } from "./symbol";


// Word
/** 
 * A word representation.
**/
export class Word extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=property" })
  property?: TextProperty;

  @Metadata({ data: "json, name=symbols", elemType: shared.Symbol })
  symbols?: Symbol[];
}
