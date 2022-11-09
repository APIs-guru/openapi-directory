import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// PromotionBodyLines
/** 
 * Block object belonging to a promotion.
**/
export class PromotionBodyLines extends SpeakeasyBase {
  @Metadata({ data: "json, name=htmlTitle" })
  htmlTitle?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PromotionImage
/** 
 * Image belonging to a promotion.
**/
export class PromotionImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// Promotion
/** 
 * Promotion result.
**/
export class Promotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=bodyLines", elemType: shared.PromotionBodyLines })
  bodyLines?: PromotionBodyLines[];

  @Metadata({ data: "json, name=displayLink" })
  displayLink?: string;

  @Metadata({ data: "json, name=htmlTitle" })
  htmlTitle?: string;

  @Metadata({ data: "json, name=image" })
  image?: PromotionImage;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
