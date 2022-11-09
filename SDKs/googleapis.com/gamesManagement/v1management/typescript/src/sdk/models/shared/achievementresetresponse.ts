import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AchievementResetResponse
/** 
 * An achievement reset response.
**/
export class AchievementResetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentState" })
  currentState?: string;

  @Metadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=updateOccurred" })
  updateOccurred?: boolean;
}
