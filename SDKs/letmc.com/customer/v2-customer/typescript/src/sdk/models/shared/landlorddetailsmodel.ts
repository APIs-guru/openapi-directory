import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordDetailsModel
/** 
 * Landlord Details
**/
export class LandlordDetailsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;
}
