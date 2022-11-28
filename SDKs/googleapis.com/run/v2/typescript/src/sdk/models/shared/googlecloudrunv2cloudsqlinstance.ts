import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2CloudSqlInstance
/** 
 * Represents a specific Cloud SQL instance.
**/
export class GoogleCloudRunV2CloudSqlInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances" })
  instances?: string[];
}
