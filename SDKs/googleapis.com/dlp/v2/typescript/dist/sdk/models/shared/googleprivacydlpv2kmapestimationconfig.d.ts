import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2AuxiliaryTable } from "./googleprivacydlpv2auxiliarytable";
import { GooglePrivacyDlpV2TaggedField } from "./googleprivacydlpv2taggedfield";
/**
 * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
**/
export declare class GooglePrivacyDlpV2KMapEstimationConfig extends SpeakeasyBase {
    auxiliaryTables?: GooglePrivacyDlpV2AuxiliaryTable[];
    quasiIds?: GooglePrivacyDlpV2TaggedField[];
    regionCode?: string;
}
