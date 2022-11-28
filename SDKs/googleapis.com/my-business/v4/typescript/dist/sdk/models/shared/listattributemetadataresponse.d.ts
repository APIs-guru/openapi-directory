import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeMetadata } from "./attributemetadata";
/**
 * Response message for Locations.ListAttributeMetadata.
**/
export declare class ListAttributeMetadataResponse extends SpeakeasyBase {
    attributes?: AttributeMetadata[];
    nextPageToken?: string;
}
