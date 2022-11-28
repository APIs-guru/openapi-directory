import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldLimits } from "./googleappsdrivelabelsv2betafieldlimits";



// GoogleAppsDriveLabelsV2betaLabelLimits
/** 
 * Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
**/
export class GoogleAppsDriveLabelsV2betaLabelLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldLimits" })
  fieldLimits?: GoogleAppsDriveLabelsV2betaFieldLimits;

  @SpeakeasyMetadata({ data: "json, name=maxDeletedFields" })
  maxDeletedFields?: number;

  @SpeakeasyMetadata({ data: "json, name=maxDescriptionLength" })
  maxDescriptionLength?: number;

  @SpeakeasyMetadata({ data: "json, name=maxDraftRevisions" })
  maxDraftRevisions?: number;

  @SpeakeasyMetadata({ data: "json, name=maxFields" })
  maxFields?: number;

  @SpeakeasyMetadata({ data: "json, name=maxTitleLength" })
  maxTitleLength?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
