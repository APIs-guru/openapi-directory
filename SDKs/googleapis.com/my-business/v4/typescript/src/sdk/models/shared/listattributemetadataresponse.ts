import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeMetadata } from "./attributemetadata";


// ListAttributeMetadataResponse
/** 
 * Response message for Locations.ListAttributeMetadata.
**/
export class ListAttributeMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.AttributeMetadata })
  attributes?: AttributeMetadata[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
