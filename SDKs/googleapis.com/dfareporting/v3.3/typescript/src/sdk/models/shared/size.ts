import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Size
/** 
 * Represents the dimensions of ads, placements, creatives, or creative assets.
**/
export class Size extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=iab" })
  iab?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
