import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldProperties
/** 
 * The basic properties of the field.
**/
export class GoogleAppsDriveLabelsV2betaFieldProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=insertBeforeField" })
  insertBeforeField?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
