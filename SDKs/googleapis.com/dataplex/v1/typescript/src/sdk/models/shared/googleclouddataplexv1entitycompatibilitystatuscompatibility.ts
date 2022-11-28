import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility
/** 
 * Provides compatibility information for a specific metadata store.
**/
export class GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatible" })
  compatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
