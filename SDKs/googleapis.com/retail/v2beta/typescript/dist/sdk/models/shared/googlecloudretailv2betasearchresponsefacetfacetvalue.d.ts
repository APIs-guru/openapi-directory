import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";
/**
 * A facet value which contains value names and their count.
**/
export declare class GoogleCloudRetailV2betaSearchResponseFacetFacetValue extends SpeakeasyBase {
    count?: string;
    interval?: GoogleCloudRetailV2betaInterval;
    maxValue?: number;
    minValue?: number;
    value?: string;
}
