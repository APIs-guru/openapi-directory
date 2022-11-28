import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
/**
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export declare class GoogleCloudDatacatalogV1beta1EntryGroupInput extends SpeakeasyBase {
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
    description?: string;
    displayName?: string;
    name?: string;
}
/**
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export declare class GoogleCloudDatacatalogV1beta1EntryGroup extends SpeakeasyBase {
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
    description?: string;
    displayName?: string;
    name?: string;
}
