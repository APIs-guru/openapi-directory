import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities
/** 
 * The capabilities related to this field on applied metadata.
**/
export class GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @Metadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @Metadata({ data: "json, name=canWrite" })
  canWrite?: boolean;
}
