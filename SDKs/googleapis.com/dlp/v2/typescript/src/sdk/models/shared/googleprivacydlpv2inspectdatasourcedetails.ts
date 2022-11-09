import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2RequestedOptions } from "./googleprivacydlpv2requestedoptions";
import { GooglePrivacyDlpV2Result } from "./googleprivacydlpv2result";


// GooglePrivacyDlpV2InspectDataSourceDetails
/** 
 * The results of an inspect DataSource job.
**/
export class GooglePrivacyDlpV2InspectDataSourceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestedOptions" })
  requestedOptions?: GooglePrivacyDlpV2RequestedOptions;

  @Metadata({ data: "json, name=result" })
  result?: GooglePrivacyDlpV2Result;
}
