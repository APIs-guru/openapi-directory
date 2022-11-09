import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility } from "./googleclouddataplexv1entitycompatibilitystatuscompatibility";
import { GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility } from "./googleclouddataplexv1entitycompatibilitystatuscompatibility";


// GoogleCloudDataplexV1EntityCompatibilityStatus
/** 
 * Provides compatibility information for various metadata stores.
**/
export class GoogleCloudDataplexV1EntityCompatibilityStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigquery" })
  bigquery?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;

  @Metadata({ data: "json, name=hiveMetastore" })
  hiveMetastore?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
}
