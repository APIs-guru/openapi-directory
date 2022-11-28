import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaListLimits } from "./googleappsdrivelabelsv2betalistlimits";



// GoogleAppsDriveLabelsV2betaSelectionLimits
/** 
 * Limits for selection Field type.
**/
export class GoogleAppsDriveLabelsV2betaSelectionLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listLimits" })
  listLimits?: GoogleAppsDriveLabelsV2betaListLimits;

  @SpeakeasyMetadata({ data: "json, name=maxChoices" })
  maxChoices?: number;

  @SpeakeasyMetadata({ data: "json, name=maxDeletedChoices" })
  maxDeletedChoices?: number;

  @SpeakeasyMetadata({ data: "json, name=maxDisplayNameLength" })
  maxDisplayNameLength?: number;

  @SpeakeasyMetadata({ data: "json, name=maxIdLength" })
  maxIdLength?: number;
}
