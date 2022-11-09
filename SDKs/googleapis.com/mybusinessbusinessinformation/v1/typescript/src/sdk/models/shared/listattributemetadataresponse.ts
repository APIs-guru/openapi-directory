import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeMetadata } from "./attributemetadata";


// ListAttributeMetadataResponse
/** 
 * Response for AttributesService.ListAttributeMetadata.
**/
export class ListAttributeMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeMetadata", elemType: shared.AttributeMetadata })
  attributeMetadata?: AttributeMetadata[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
