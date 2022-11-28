import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BrandInput
/** 
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
export class BrandInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationTitle" })
  applicationTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=supportEmail" })
  supportEmail?: string;
}


// Brand
/** 
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
export class Brand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationTitle" })
  applicationTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgInternalOnly" })
  orgInternalOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportEmail" })
  supportEmail?: string;
}
