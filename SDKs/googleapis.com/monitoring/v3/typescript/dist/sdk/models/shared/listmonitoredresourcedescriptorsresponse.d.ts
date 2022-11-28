import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
/**
 * The ListMonitoredResourceDescriptors response.
**/
export declare class ListMonitoredResourceDescriptorsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resourceDescriptors?: MonitoredResourceDescriptor[];
}
