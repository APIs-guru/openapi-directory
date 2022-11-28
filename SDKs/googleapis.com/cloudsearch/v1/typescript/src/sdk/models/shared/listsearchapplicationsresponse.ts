import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchApplication } from "./searchapplication";



export class ListSearchApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=searchApplications", elemType: SearchApplication })
  searchApplications?: SearchApplication[];
}
