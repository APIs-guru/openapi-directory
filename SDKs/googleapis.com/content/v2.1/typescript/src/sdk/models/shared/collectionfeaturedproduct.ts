import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CollectionFeaturedProduct
/** 
 * The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)
**/
export class CollectionFeaturedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}
