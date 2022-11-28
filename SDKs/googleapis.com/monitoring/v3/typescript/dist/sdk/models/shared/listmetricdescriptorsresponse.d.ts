import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDescriptor } from "./metricdescriptor";
/**
 * The ListMetricDescriptors response.
**/
export declare class ListMetricDescriptorsResponse extends SpeakeasyBase {
    metricDescriptors?: MetricDescriptor[];
    nextPageToken?: string;
}
