import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Release } from "./release";


// ListReleasesResponse
/** 
 * The response object from `ListReleases`.
**/
export class ListReleasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=releases", elemType: shared.Release })
  releases?: Release[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
