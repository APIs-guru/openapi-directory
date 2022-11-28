import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
/**
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export declare class GoogleCloudDatacatalogV1EntryGroupInput extends SpeakeasyBase {
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
    description?: string;
    displayName?: string;
    name?: string;
}
/**
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export declare class GoogleCloudDatacatalogV1EntryGroup extends SpeakeasyBase {
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
    description?: string;
    displayName?: string;
    name?: string;
}
