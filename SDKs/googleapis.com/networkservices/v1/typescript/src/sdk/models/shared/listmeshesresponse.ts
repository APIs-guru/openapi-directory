import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Mesh } from "./mesh";


// ListMeshesResponse
/** 
 * Response returned by the ListMeshes method.
**/
export class ListMeshesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshes", elemType: shared.Mesh })
  meshes?: Mesh[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
