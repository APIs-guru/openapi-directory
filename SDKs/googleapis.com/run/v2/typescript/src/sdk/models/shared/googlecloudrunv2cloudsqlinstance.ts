import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2CloudSqlInstance
/** 
 * Represents a specific Cloud SQL instance.
**/
export class GoogleCloudRunV2CloudSqlInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances" })
  instances?: string[];
}
