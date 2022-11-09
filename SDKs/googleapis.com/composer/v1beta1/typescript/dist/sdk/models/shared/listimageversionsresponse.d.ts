import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageVersion } from "./imageversion";
/**
 * The ImageVersions in a project and location.
**/
export declare class ListImageVersionsResponse extends SpeakeasyBase {
    imageVersions?: ImageVersion[];
    nextPageToken?: string;
}
