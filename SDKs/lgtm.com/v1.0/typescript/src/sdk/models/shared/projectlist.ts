import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



export class ProjectList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Project })
  data?: Project[];

  @SpeakeasyMetadata({ data: "json, name=nextPageUrl" })
  nextPageUrl?: string;
}
