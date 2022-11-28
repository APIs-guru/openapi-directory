import { SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";
/**
 * A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export declare class Location extends SpeakeasyBase {
    address?: PostalAddress;
    name?: string;
    primaryCategoryId?: string;
    primaryPhone?: string;
    websiteUri?: string;
}
