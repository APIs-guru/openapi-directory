import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Database
/** 
 * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
**/
export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=grantees" })
  grantees?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
