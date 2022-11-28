import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1IntegratedGradientsAttribution } from "./googlecloudmlv1integratedgradientsattribution";
import { GoogleCloudMlV1SampledShapleyAttribution } from "./googlecloudmlv1sampledshapleyattribution";
import { GoogleCloudMlV1XraiAttribution } from "./googlecloudmlv1xraiattribution";



// GoogleCloudMlV1ExplanationConfig
/** 
 * Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
**/
export class GoogleCloudMlV1ExplanationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integratedGradientsAttribution" })
  integratedGradientsAttribution?: GoogleCloudMlV1IntegratedGradientsAttribution;

  @SpeakeasyMetadata({ data: "json, name=sampledShapleyAttribution" })
  sampledShapleyAttribution?: GoogleCloudMlV1SampledShapleyAttribution;

  @SpeakeasyMetadata({ data: "json, name=xraiAttribution" })
  xraiAttribution?: GoogleCloudMlV1XraiAttribution;
}
