import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnPremDomainDetails } from "./onpremdomaindetails";



// EnableMigrationRequest
/** 
 * EnableMigrationRequest is the request message for EnableMigration method.
**/
export class EnableMigrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migratingDomains", elemType: OnPremDomainDetails })
  migratingDomains?: OnPremDomainDetails[];
}
