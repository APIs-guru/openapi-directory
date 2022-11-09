import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaBadgeConfig } from "./googleappsdrivelabelsv2betabadgeconfig";


// GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties
/** 
 * Basic properties of the choice.
**/
export class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeConfig" })
  badgeConfig?: GoogleAppsDriveLabelsV2betaBadgeConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=insertBeforeChoice" })
  insertBeforeChoice?: string;
}
