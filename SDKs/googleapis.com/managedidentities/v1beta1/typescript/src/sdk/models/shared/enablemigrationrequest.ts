import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OnPremDomainDetails } from "./onpremdomaindetails";


// EnableMigrationRequest
/** 
 * EnableMigrationRequest is the request message for EnableMigration method.
**/
export class EnableMigrationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=migratingDomains", elemType: shared.OnPremDomainDetails })
  migratingDomains?: OnPremDomainDetails[];
}
