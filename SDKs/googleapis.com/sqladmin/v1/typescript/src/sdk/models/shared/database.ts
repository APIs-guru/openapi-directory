import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlServerDatabaseDetails } from "./sqlserverdatabasedetails";



// Database
/** 
 * Represents a SQL database on the Cloud SQL instance.
**/
export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charset" })
  charset?: string;

  @SpeakeasyMetadata({ data: "json, name=collation" })
  collation?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlserverDatabaseDetails" })
  sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
}
