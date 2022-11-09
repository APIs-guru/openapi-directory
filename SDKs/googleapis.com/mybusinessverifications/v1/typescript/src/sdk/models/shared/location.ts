import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";


// Location
/** 
 * A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PostalAddress;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryCategoryId" })
  primaryCategoryId?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @Metadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}
