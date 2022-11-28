import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptimizationActivity } from "./optimizationactivity";


export enum CreativeOptimizationConfigurationOptimizationModelEnum {
    Click = "CLICK",
    PostClick = "POST_CLICK",
    PostImpression = "POST_IMPRESSION",
    PostClickAndImpression = "POST_CLICK_AND_IMPRESSION",
    VideoCompletion = "VIDEO_COMPLETION"
}


// CreativeOptimizationConfiguration
/** 
 * Creative optimization settings.
**/
export class CreativeOptimizationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationActivitys", elemType: OptimizationActivity })
  optimizationActivitys?: OptimizationActivity[];

  @SpeakeasyMetadata({ data: "json, name=optimizationModel" })
  optimizationModel?: CreativeOptimizationConfigurationOptimizationModelEnum;
}
