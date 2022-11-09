import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageVersion } from "./imageversion";


// ListImageVersionsResponse
/** 
 * The ImageVersions in a project and location.
**/
export class ListImageVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageVersions", elemType: shared.ImageVersion })
  imageVersions?: ImageVersion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
