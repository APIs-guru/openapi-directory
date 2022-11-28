import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlayerLevel
/** 
 * 1P/3P metadata about a user's level.
**/
export class PlayerLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=maxExperiencePoints" })
  maxExperiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=minExperiencePoints" })
  minExperiencePoints?: string;
}
