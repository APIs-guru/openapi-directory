import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";

export enum SegmentsProgramEnum {
    ProgramUnspecified = "PROGRAM_UNSPECIFIED"
,    ShoppingAds = "SHOPPING_ADS"
,    FreeProductListing = "FREE_PRODUCT_LISTING"
,    FreeLocalProductListing = "FREE_LOCAL_PRODUCT_LISTING"
,    BuyOnGoogleListing = "BUY_ON_GOOGLE_LISTING"
}


// Segments
/** 
 * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
**/
export class Segments extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=categoryL1" })
  categoryL1?: string;

  @Metadata({ data: "json, name=categoryL2" })
  categoryL2?: string;

  @Metadata({ data: "json, name=categoryL3" })
  categoryL3?: string;

  @Metadata({ data: "json, name=categoryL4" })
  categoryL4?: string;

  @Metadata({ data: "json, name=categoryL5" })
  categoryL5?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

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

  @Metadata({ data: "json, name=customerCountryCode" })
  customerCountryCode?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=productTypeL1" })
  productTypeL1?: string;

  @Metadata({ data: "json, name=productTypeL2" })
  productTypeL2?: string;

  @Metadata({ data: "json, name=productTypeL3" })
  productTypeL3?: string;

  @Metadata({ data: "json, name=productTypeL4" })
  productTypeL4?: string;

  @Metadata({ data: "json, name=productTypeL5" })
  productTypeL5?: string;

  @Metadata({ data: "json, name=program" })
  program?: SegmentsProgramEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=week" })
  week?: Date;
}
