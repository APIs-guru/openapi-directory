import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1IntegratedGradientsAttribution
/** 
 * Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
**/
export class GoogleCloudMlV1IntegratedGradientsAttribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=numIntegralSteps" })
  numIntegralSteps?: number;
}
