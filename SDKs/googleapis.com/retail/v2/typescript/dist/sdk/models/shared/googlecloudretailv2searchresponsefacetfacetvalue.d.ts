import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";
/**
 * A facet value which contains value names and their count.
**/
export declare class GoogleCloudRetailV2SearchResponseFacetFacetValue extends SpeakeasyBase {
    count?: string;
    interval?: GoogleCloudRetailV2Interval;
    maxValue?: number;
    minValue?: number;
    value?: string;
}
