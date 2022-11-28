import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Size
/** 
 * Represents the dimensions of ads, placements, creatives, or creative assets.
**/
export class Size extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=iab" })
  iab?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
