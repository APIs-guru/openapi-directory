import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
/**
 * Result returned from ListMonitoredResourceDescriptors.
**/
export declare class ListMonitoredResourceDescriptorsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resourceDescriptors?: MonitoredResourceDescriptor[];
}
