import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RequestedOptions } from "./googleprivacydlpv2requestedoptions";
import { GooglePrivacyDlpV2Result } from "./googleprivacydlpv2result";



// GooglePrivacyDlpV2InspectDataSourceDetails
/** 
 * The results of an inspect DataSource job.
**/
export class GooglePrivacyDlpV2InspectDataSourceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestedOptions" })
  requestedOptions?: GooglePrivacyDlpV2RequestedOptions;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GooglePrivacyDlpV2Result;
}
