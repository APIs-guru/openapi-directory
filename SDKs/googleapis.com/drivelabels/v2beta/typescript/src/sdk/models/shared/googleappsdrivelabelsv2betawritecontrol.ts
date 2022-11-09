import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaWriteControl
/** 
 * Provides control over how write requests are executed. When not specified, the last write wins.
**/
export class GoogleAppsDriveLabelsV2betaWriteControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=requiredRevisionId" })
  requiredRevisionId?: string;
}
