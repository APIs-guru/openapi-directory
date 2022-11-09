import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordDetailsModel
/** 
 * Landlord Details
**/
export class LandlordDetailsModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=Mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Phone" })
  phone?: string;
}
