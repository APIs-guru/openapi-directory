import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum SegmentsProgramEnum {
    ProgramUnspecified = "PROGRAM_UNSPECIFIED",
    ShoppingAds = "SHOPPING_ADS",
    FreeProductListing = "FREE_PRODUCT_LISTING",
    FreeLocalProductListing = "FREE_LOCAL_PRODUCT_LISTING",
    BuyOnGoogleListing = "BUY_ON_GOOGLE_LISTING"
}
/**
 * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
**/
export declare class Segments extends SpeakeasyBase {
    brand?: string;
    categoryL1?: string;
    categoryL2?: string;
    categoryL3?: string;
    categoryL4?: string;
    categoryL5?: string;
    currencyCode?: string;
    customLabel0?: string;
    customLabel1?: string;
    customLabel2?: string;
    customLabel3?: string;
    customLabel4?: string;
    customerCountryCode?: string;
    date?: Date;
    offerId?: string;
    productTypeL1?: string;
    productTypeL2?: string;
    productTypeL3?: string;
    productTypeL4?: string;
    productTypeL5?: string;
    program?: SegmentsProgramEnum;
    title?: string;
    week?: Date;
}
