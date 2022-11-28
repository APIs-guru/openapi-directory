import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities
/** 
 * The capabilities related to this field on applied metadata.
**/
export class GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canRead" })
  canRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canSearch" })
  canSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canWrite" })
  canWrite?: boolean;
}
