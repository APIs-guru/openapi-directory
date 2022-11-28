import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1XraiAttribution
/** 
 * Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.
**/
export class GoogleCloudMlV1XraiAttribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numIntegralSteps" })
  numIntegralSteps?: number;
}
