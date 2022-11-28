import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionFeaturedProduct } from "./collectionfeaturedproduct";



// Collection
/** 
 * The collection message.
**/
export class Collection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customLabel0" })
  customLabel0?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel1" })
  customLabel1?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel2" })
  customLabel2?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel3" })
  customLabel3?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel4" })
  customLabel4?: string;

  @SpeakeasyMetadata({ data: "json, name=featuredProduct", elemType: CollectionFeaturedProduct })
  featuredProduct?: CollectionFeaturedProduct[];

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageLink" })
  imageLink?: string[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileLink" })
  mobileLink?: string;

  @SpeakeasyMetadata({ data: "json, name=productCountry" })
  productCountry?: string;
}
