import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";



// GooglePrivacyDlpV2RedactImageResponse
/** 
 * Results of redacting an image.
**/
export class GooglePrivacyDlpV2RedactImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extractedText" })
  extractedText?: string;

  @SpeakeasyMetadata({ data: "json, name=inspectResult" })
  inspectResult?: GooglePrivacyDlpV2InspectResult;

  @SpeakeasyMetadata({ data: "json, name=redactedImage" })
  redactedImage?: string;
}
