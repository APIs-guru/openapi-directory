import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2FieldAppliedCapabilities
/** 
 * The capabilities related to this field on applied metadata.
**/
export class GoogleAppsDriveLabelsV2FieldAppliedCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canWrite" })
  canWrite?: boolean;
}
