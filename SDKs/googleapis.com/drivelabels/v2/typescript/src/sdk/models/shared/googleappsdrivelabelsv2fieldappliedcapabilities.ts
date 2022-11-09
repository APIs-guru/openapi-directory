import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2FieldAppliedCapabilities
/** 
 * The capabilities related to this field on applied metadata.
**/
export class GoogleAppsDriveLabelsV2FieldAppliedCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @Metadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @Metadata({ data: "json, name=canWrite" })
  canWrite?: boolean;
}
