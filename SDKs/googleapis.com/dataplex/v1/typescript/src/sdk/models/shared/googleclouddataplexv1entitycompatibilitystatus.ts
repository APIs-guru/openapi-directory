import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility } from "./googleclouddataplexv1entitycompatibilitystatuscompatibility";



// GoogleCloudDataplexV1EntityCompatibilityStatus
/** 
 * Provides compatibility information for various metadata stores.
**/
export class GoogleCloudDataplexV1EntityCompatibilityStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigquery" })
  bigquery?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;

  @SpeakeasyMetadata({ data: "json, name=hiveMetastore" })
  hiveMetastore?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
}
