import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaListLimits } from "./googleappsdrivelabelsv2betalistlimits";


// GoogleAppsDriveLabelsV2betaSelectionLimits
/** 
 * Limits for selection Field type.
**/
export class GoogleAppsDriveLabelsV2betaSelectionLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=listLimits" })
  listLimits?: GoogleAppsDriveLabelsV2betaListLimits;

  @Metadata({ data: "json, name=maxChoices" })
  maxChoices?: number;

  @Metadata({ data: "json, name=maxDeletedChoices" })
  maxDeletedChoices?: number;

  @Metadata({ data: "json, name=maxDisplayNameLength" })
  maxDisplayNameLength?: number;

  @Metadata({ data: "json, name=maxIdLength" })
  maxIdLength?: number;
}
