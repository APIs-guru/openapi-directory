import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveViewVideoViewabilityMetricConfig } from "./activeviewvideoviewabilitymetricconfig";
import { LookbackWindow } from "./lookbackwindow";
export declare enum FloodlightGroupWebTagTypeEnum {
    WebTagTypeUnspecified = "WEB_TAG_TYPE_UNSPECIFIED",
    WebTagTypeNone = "WEB_TAG_TYPE_NONE",
    WebTagTypeImage = "WEB_TAG_TYPE_IMAGE",
    WebTagTypeDynamic = "WEB_TAG_TYPE_DYNAMIC"
}
/**
 * A single Floodlight group.
**/
export declare class FloodlightGroup extends SpeakeasyBase {
    activeViewConfig?: ActiveViewVideoViewabilityMetricConfig;
    customVariables?: Map<string, any>;
    displayName?: string;
    floodlightGroupId?: string;
    lookbackWindow?: LookbackWindow;
    name?: string;
    webTagType?: FloodlightGroupWebTagTypeEnum;
}
