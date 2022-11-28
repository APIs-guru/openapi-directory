import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PromotionBodyLines
/** 
 * Block object belonging to a promotion.
**/
export class PromotionBodyLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=htmlTitle" })
  htmlTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PromotionImage
/** 
 * Image belonging to a promotion.
**/
export class PromotionImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// Promotion
/** 
 * Promotion result.
**/
export class Promotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bodyLines", elemType: PromotionBodyLines })
  bodyLines?: PromotionBodyLines[];

  @SpeakeasyMetadata({ data: "json, name=displayLink" })
  displayLink?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlTitle" })
  htmlTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PromotionImage;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
