import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval
/** 
 * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceLevel" })
  confidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=lowerBound" })
  lowerBound?: number;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: number;

  @SpeakeasyMetadata({ data: "json, name=upperBound" })
  upperBound?: number;
}
