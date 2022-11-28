import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
**/
export declare class Database extends SpeakeasyBase {
    displayName?: string;
    grantees?: string[];
    name?: string;
    query?: string;
    userName?: string;
}
