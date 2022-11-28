import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CombinedAudience
/** 
 * Describes a combined audience resource.
**/
export class CombinedAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combinedAudienceId" })
  combinedAudienceId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
