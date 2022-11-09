import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";


// GooglePrivacyDlpV2RedactImageResponse
/** 
 * Results of redacting an image.
**/
export class GooglePrivacyDlpV2RedactImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=extractedText" })
  extractedText?: string;

  @Metadata({ data: "json, name=inspectResult" })
  inspectResult?: GooglePrivacyDlpV2InspectResult;

  @Metadata({ data: "json, name=redactedImage" })
  redactedImage?: string;
}
