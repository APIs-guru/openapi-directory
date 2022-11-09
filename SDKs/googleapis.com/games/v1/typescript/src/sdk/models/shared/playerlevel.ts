import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlayerLevel
/** 
 * 1P/3P metadata about a user's level.
**/
export class PlayerLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=level" })
  level?: number;

  @Metadata({ data: "json, name=maxExperiencePoints" })
  maxExperiencePoints?: string;

  @Metadata({ data: "json, name=minExperiencePoints" })
  minExperiencePoints?: string;
}
