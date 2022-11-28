import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2AuxiliaryTable } from "./googleprivacydlpv2auxiliarytable";
import { GooglePrivacyDlpV2TaggedField } from "./googleprivacydlpv2taggedfield";



// GooglePrivacyDlpV2KMapEstimationConfig
/** 
 * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
**/
export class GooglePrivacyDlpV2KMapEstimationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryTables", elemType: GooglePrivacyDlpV2AuxiliaryTable })
  auxiliaryTables?: GooglePrivacyDlpV2AuxiliaryTable[];

  @SpeakeasyMetadata({ data: "json, name=quasiIds", elemType: GooglePrivacyDlpV2TaggedField })
  quasiIds?: GooglePrivacyDlpV2TaggedField[];

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
