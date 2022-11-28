import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDescriptor } from "./metricdescriptor";



// ListMetricDescriptorsResponse
/** 
 * The ListMetricDescriptors response.
**/
export class ListMetricDescriptorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricDescriptors", elemType: MetricDescriptor })
  metricDescriptors?: MetricDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
