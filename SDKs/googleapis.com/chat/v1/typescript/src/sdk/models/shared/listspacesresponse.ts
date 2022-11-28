import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Space } from "./space";



// ListSpacesResponse
/** 
 * The response corresponding to ListSpacesRequest.
**/
export class ListSpacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spaces", elemType: Space })
  spaces?: Space[];
}
