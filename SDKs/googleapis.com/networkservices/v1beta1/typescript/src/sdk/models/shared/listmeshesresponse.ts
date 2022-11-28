import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Mesh } from "./mesh";



// ListMeshesResponse
/** 
 * Response returned by the ListMeshes method.
**/
export class ListMeshesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshes", elemType: Mesh })
  meshes?: Mesh[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
