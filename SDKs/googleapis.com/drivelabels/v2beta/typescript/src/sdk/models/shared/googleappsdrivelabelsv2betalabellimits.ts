import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaFieldLimits } from "./googleappsdrivelabelsv2betafieldlimits";


// GoogleAppsDriveLabelsV2betaLabelLimits
/** 
 * Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
**/
export class GoogleAppsDriveLabelsV2betaLabelLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldLimits" })
  fieldLimits?: GoogleAppsDriveLabelsV2betaFieldLimits;

  @Metadata({ data: "json, name=maxDeletedFields" })
  maxDeletedFields?: number;

  @Metadata({ data: "json, name=maxDescriptionLength" })
  maxDescriptionLength?: number;

  @Metadata({ data: "json, name=maxDraftRevisions" })
  maxDraftRevisions?: number;

  @Metadata({ data: "json, name=maxFields" })
  maxFields?: number;

  @Metadata({ data: "json, name=maxTitleLength" })
  maxTitleLength?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
