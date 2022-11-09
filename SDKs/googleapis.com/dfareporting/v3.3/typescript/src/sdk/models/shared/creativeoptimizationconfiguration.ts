import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OptimizationActivity } from "./optimizationactivity";

export enum CreativeOptimizationConfigurationOptimizationModelEnum {
    Click = "CLICK"
,    PostClick = "POST_CLICK"
,    PostImpression = "POST_IMPRESSION"
,    PostClickAndImpression = "POST_CLICK_AND_IMPRESSION"
,    VideoCompletion = "VIDEO_COMPLETION"
}


// CreativeOptimizationConfiguration
/** 
 * Creative optimization settings.
**/
export class CreativeOptimizationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optimizationActivitys", elemType: shared.OptimizationActivity })
  optimizationActivitys?: OptimizationActivity[];

  @Metadata({ data: "json, name=optimizationModel" })
  optimizationModel?: CreativeOptimizationConfigurationOptimizationModelEnum;
}
