import { SpeakeasyBase } from "../../../internal/utils";
import { Mesh } from "./mesh";
/**
 * Response returned by the ListMeshes method.
**/
export declare class ListMeshesResponse extends SpeakeasyBase {
    meshes?: Mesh[];
    nextPageToken?: string;
}
