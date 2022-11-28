import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeMetadata } from "./attributemetadata";
/**
 * Response for AttributesService.ListAttributeMetadata.
**/
export declare class ListAttributeMetadataResponse extends SpeakeasyBase {
    attributeMetadata?: AttributeMetadata[];
    nextPageToken?: string;
}
