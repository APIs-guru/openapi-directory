import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordCrmEntry
/** 
 * Class for Landlord CRM Entries
**/
export class LandlordCrmEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=BranchID" })
  branchId?: string;

  @Metadata({ data: "json, name=GlobalReference" })
  globalReference?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OID" })
  oid?: string;
}
