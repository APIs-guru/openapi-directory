import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeMetadata } from "./attributemetadata";



// ListAttributeMetadataResponse
/** 
 * Response message for Locations.ListAttributeMetadata.
**/
export class ListAttributeMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AttributeMetadata })
  attributes?: AttributeMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
