import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingPoly } from "./boundingpoly";


// CropHint
/** 
 * Single crop hint that is used to generate a new crop when serving an image.
**/
export class CropHint extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=importanceFraction" })
  importanceFraction?: number;
}
