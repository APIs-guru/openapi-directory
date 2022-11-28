import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";
/**
 * A facet value which contains value names and their count.
**/
export declare class GoogleCloudRetailV2alphaSearchResponseFacetFacetValue extends SpeakeasyBase {
    count?: string;
    interval?: GoogleCloudRetailV2alphaInterval;
    maxValue?: number;
    minValue?: number;
    value?: string;
}
