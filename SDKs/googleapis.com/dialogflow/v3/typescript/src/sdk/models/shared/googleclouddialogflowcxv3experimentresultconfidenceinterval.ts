import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval
/** 
 * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
**/
export class GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceLevel" })
  confidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=lowerBound" })
  lowerBound?: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: number;

  @SpeakeasyMetadata({ data: "json, name=upperBound" })
  upperBound?: number;
}
