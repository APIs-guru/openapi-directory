import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricDescriptor } from "./metricdescriptor";


// ListMetricDescriptorsResponse
/** 
 * The ListMetricDescriptors response.
**/
export class ListMetricDescriptorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricDescriptors", elemType: shared.MetricDescriptor })
  metricDescriptors?: MetricDescriptor[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
