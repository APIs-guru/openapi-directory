import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";



// ListReleasesResponse
/** 
 * The response object from `ListReleases`.
**/
export class ListReleasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=releases", elemType: Release })
  releases?: Release[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
