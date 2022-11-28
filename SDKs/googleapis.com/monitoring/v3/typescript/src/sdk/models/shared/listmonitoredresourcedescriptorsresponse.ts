import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";



// ListMonitoredResourceDescriptorsResponse
/** 
 * The ListMonitoredResourceDescriptors response.
**/
export class ListMonitoredResourceDescriptorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceDescriptors", elemType: MonitoredResourceDescriptor })
  resourceDescriptors?: MonitoredResourceDescriptor[];
}
