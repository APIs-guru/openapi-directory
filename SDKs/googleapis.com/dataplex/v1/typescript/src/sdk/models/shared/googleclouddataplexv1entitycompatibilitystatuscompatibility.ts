import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility
/** 
 * Provides compatibility information for a specific metadata store.
**/
export class GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatible" })
  compatible?: boolean;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
