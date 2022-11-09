import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";


// ListMonitoredResourceDescriptorsResponse
/** 
 * Result returned from ListMonitoredResourceDescriptors.
**/
export class ListMonitoredResourceDescriptorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resourceDescriptors", elemType: shared.MonitoredResourceDescriptor })
  resourceDescriptors?: MonitoredResourceDescriptor[];
}
