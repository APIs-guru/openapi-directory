import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Project } from "./project";


export class ProjectList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Project })
  data?: Project[];

  @Metadata({ data: "json, name=nextPageUrl" })
  nextPageUrl?: string;
}
