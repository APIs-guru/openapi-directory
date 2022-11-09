import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionFeaturedProduct } from "./collectionfeaturedproduct";


// Collection
/** 
 * The collection message.
**/
export class Collection extends SpeakeasyBase {
  @Metadata({ data: "json, name=customLabel0" })
  customLabel0?: string;

  @Metadata({ data: "json, name=customLabel1" })
  customLabel1?: string;

  @Metadata({ data: "json, name=customLabel2" })
  customLabel2?: string;

  @Metadata({ data: "json, name=customLabel3" })
  customLabel3?: string;

  @Metadata({ data: "json, name=customLabel4" })
  customLabel4?: string;

  @Metadata({ data: "json, name=featuredProduct", elemType: shared.CollectionFeaturedProduct })
  featuredProduct?: CollectionFeaturedProduct[];

  @Metadata({ data: "json, name=headline" })
  headline?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageLink" })
  imageLink?: string[];

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=mobileLink" })
  mobileLink?: string;

  @Metadata({ data: "json, name=productCountry" })
  productCountry?: string;
}
