import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvertiserAndBrand
/** 
 * Detected advertiser and brand information.
**/
export class AdvertiserAndBrand extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @Metadata({ data: "json, name=brandId" })
  brandId?: string;

  @Metadata({ data: "json, name=brandName" })
  brandName?: string;
}
