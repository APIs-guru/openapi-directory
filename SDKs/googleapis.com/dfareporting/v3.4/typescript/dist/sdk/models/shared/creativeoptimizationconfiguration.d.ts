import { SpeakeasyBase } from "../../../internal/utils";
import { OptimizationActivity } from "./optimizationactivity";
export declare enum CreativeOptimizationConfigurationOptimizationModelEnum {
    Click = "CLICK",
    PostClick = "POST_CLICK",
    PostImpression = "POST_IMPRESSION",
    PostClickAndImpression = "POST_CLICK_AND_IMPRESSION",
    VideoCompletion = "VIDEO_COMPLETION"
}
/**
 * Creative optimization settings.
**/
export declare class CreativeOptimizationConfiguration extends SpeakeasyBase {
    id?: string;
    name?: string;
    optimizationActivitys?: OptimizationActivity[];
    optimizationModel?: CreativeOptimizationConfigurationOptimizationModelEnum;
}
