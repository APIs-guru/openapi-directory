import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Range } from "./googleprivacydlpv2range";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2ContentLocation } from "./googleprivacydlpv2contentlocation";



// GooglePrivacyDlpV2Location
/** 
 * Specifies the location of the finding.
**/
export class GooglePrivacyDlpV2Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteRange" })
  byteRange?: GooglePrivacyDlpV2Range;

  @SpeakeasyMetadata({ data: "json, name=codepointRange" })
  codepointRange?: GooglePrivacyDlpV2Range;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: GooglePrivacyDlpV2Container;

  @SpeakeasyMetadata({ data: "json, name=contentLocations", elemType: GooglePrivacyDlpV2ContentLocation })
  contentLocations?: GooglePrivacyDlpV2ContentLocation[];
}
