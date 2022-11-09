import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2AuxiliaryTable } from "./googleprivacydlpv2auxiliarytable";
import { GooglePrivacyDlpV2TaggedField } from "./googleprivacydlpv2taggedfield";


// GooglePrivacyDlpV2KMapEstimationConfig
/** 
 * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
**/
export class GooglePrivacyDlpV2KMapEstimationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryTables", elemType: shared.GooglePrivacyDlpV2AuxiliaryTable })
  auxiliaryTables?: GooglePrivacyDlpV2AuxiliaryTable[];

  @Metadata({ data: "json, name=quasiIds", elemType: shared.GooglePrivacyDlpV2TaggedField })
  quasiIds?: GooglePrivacyDlpV2TaggedField[];

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
