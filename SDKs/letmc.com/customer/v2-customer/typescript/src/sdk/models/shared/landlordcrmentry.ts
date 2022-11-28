import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordCrmEntry
/** 
 * Class for Landlord CRM Entries
**/
export class LandlordCrmEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BranchID" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OID" })
  oid?: string;
}
