import { SpeakeasyBase } from "../../../internal/utils";
import { OnPremDomainDetails } from "./onpremdomaindetails";
/**
 * EnableMigrationRequest is the request message for EnableMigration method.
**/
export declare class EnableMigrationRequest extends SpeakeasyBase {
    migratingDomains?: OnPremDomainDetails[];
}
