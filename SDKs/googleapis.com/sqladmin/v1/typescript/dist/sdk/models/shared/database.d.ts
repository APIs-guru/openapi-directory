import { SpeakeasyBase } from "../../../internal/utils";
import { SqlServerDatabaseDetails } from "./sqlserverdatabasedetails";
/**
 * Represents a SQL database on the Cloud SQL instance.
**/
export declare class Database extends SpeakeasyBase {
    charset?: string;
    collation?: string;
    etag?: string;
    instance?: string;
    kind?: string;
    name?: string;
    project?: string;
    selfLink?: string;
    sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
}
