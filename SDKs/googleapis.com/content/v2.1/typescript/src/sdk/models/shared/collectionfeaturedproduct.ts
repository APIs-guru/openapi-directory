import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionFeaturedProduct
/** 
 * The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)
**/
export class CollectionFeaturedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
