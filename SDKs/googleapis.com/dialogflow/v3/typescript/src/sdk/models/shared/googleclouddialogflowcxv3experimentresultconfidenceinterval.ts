import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval
/** 
 * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
**/
export class GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceLevel" })
  confidenceLevel?: number;

  @Metadata({ data: "json, name=lowerBound" })
  lowerBound?: number;

  @Metadata({ data: "json, name=ratio" })
  ratio?: number;

  @Metadata({ data: "json, name=upperBound" })
  upperBound?: number;
}
