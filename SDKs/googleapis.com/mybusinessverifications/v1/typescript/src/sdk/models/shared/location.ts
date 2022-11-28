import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";



// Location
/** 
 * A subset of location info. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryCategoryId" })
  primaryCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}
