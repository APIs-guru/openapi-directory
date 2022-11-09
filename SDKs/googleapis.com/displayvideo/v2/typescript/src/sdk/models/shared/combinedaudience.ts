import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CombinedAudience
/** 
 * Describes a combined audience resource.
**/
export class CombinedAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=combinedAudienceId" })
  combinedAudienceId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
