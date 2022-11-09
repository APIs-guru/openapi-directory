import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Release } from "./release";


// ListReleasesResponse
/** 
 * The response for FirebaseRulesService.ListReleases.
**/
export class ListReleasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=releases", elemType: shared.Release })
  releases?: Release[];
}
