import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiserAndBrand
/** 
 * Detected advertiser and brand information.
**/
export class AdvertiserAndBrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @SpeakeasyMetadata({ data: "json, name=brandId" })
  brandId?: string;

  @SpeakeasyMetadata({ data: "json, name=brandName" })
  brandName?: string;
}
