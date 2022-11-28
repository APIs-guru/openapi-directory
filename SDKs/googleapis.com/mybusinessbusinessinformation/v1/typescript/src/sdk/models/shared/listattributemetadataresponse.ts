import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeMetadata } from "./attributemetadata";



// ListAttributeMetadataResponse
/** 
 * Response for AttributesService.ListAttributeMetadata.
**/
export class ListAttributeMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeMetadata", elemType: AttributeMetadata })
  attributeMetadata?: AttributeMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
