import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Range } from "./googleprivacydlpv2range";
import { GooglePrivacyDlpV2Range } from "./googleprivacydlpv2range";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2ContentLocation } from "./googleprivacydlpv2contentlocation";


// GooglePrivacyDlpV2Location
/** 
 * Specifies the location of the finding.
**/
export class GooglePrivacyDlpV2Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteRange" })
  byteRange?: GooglePrivacyDlpV2Range;

  @Metadata({ data: "json, name=codepointRange" })
  codepointRange?: GooglePrivacyDlpV2Range;

  @Metadata({ data: "json, name=container" })
  container?: GooglePrivacyDlpV2Container;

  @Metadata({ data: "json, name=contentLocations", elemType: shared.GooglePrivacyDlpV2ContentLocation })
  contentLocations?: GooglePrivacyDlpV2ContentLocation[];
}
