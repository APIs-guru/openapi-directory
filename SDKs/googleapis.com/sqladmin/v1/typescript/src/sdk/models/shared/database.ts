import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SqlServerDatabaseDetails } from "./sqlserverdatabasedetails";


// Database
/** 
 * Represents a SQL database on the Cloud SQL instance.
**/
export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=charset" })
  charset?: string;

  @Metadata({ data: "json, name=collation" })
  collation?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=sqlserverDatabaseDetails" })
  sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
}
