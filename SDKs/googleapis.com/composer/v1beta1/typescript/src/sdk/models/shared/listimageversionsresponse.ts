import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageVersion } from "./imageversion";



// ListImageVersionsResponse
/** 
 * The ImageVersions in a project and location.
**/
export class ListImageVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageVersions", elemType: ImageVersion })
  imageVersions?: ImageVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
