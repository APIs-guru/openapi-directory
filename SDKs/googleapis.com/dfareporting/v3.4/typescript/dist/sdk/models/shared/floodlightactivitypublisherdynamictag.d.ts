import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivityDynamicTag } from "./floodlightactivitydynamictag";
import { DimensionValue } from "./dimensionvalue";
/**
 * Publisher Dynamic Tag
**/
export declare class FloodlightActivityPublisherDynamicTag extends SpeakeasyBase {
    clickThrough?: boolean;
    directorySiteId?: string;
    dynamicTag?: FloodlightActivityDynamicTag;
    siteId?: string;
    siteIdDimensionValue?: DimensionValue;
    viewThrough?: boolean;
}
