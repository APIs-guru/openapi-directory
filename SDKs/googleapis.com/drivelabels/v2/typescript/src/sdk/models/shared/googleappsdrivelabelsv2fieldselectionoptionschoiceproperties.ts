import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2BadgeConfig } from "./googleappsdrivelabelsv2badgeconfig";


// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties
/** 
 * Basic properties of the choice.
**/
export class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeConfig" })
  badgeConfig?: GoogleAppsDriveLabelsV2BadgeConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=insertBeforeChoice" })
  insertBeforeChoice?: string;
}
