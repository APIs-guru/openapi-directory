import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectInfo } from "./projectinfo";



export class ListAvailableProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projectInfo", elemType: ProjectInfo })
  projectInfo?: ProjectInfo[];
}
