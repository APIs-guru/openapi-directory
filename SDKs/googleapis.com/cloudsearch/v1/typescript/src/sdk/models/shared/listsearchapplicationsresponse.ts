import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchApplication } from "./searchapplication";


export class ListSearchApplicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=searchApplications", elemType: shared.SearchApplication })
  searchApplications?: SearchApplication[];
}
