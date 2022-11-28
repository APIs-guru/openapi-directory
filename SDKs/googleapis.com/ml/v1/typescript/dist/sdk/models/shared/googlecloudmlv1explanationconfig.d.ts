import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1IntegratedGradientsAttribution } from "./googlecloudmlv1integratedgradientsattribution";
import { GoogleCloudMlV1SampledShapleyAttribution } from "./googlecloudmlv1sampledshapleyattribution";
import { GoogleCloudMlV1XraiAttribution } from "./googlecloudmlv1xraiattribution";
/**
 * Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
**/
export declare class GoogleCloudMlV1ExplanationConfig extends SpeakeasyBase {
    integratedGradientsAttribution?: GoogleCloudMlV1IntegratedGradientsAttribution;
    sampledShapleyAttribution?: GoogleCloudMlV1SampledShapleyAttribution;
    xraiAttribution?: GoogleCloudMlV1XraiAttribution;
}
