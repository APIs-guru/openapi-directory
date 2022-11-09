import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectLanguageStats } from "./projectlanguagestats";


export class ProjectDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=languages", elemType: shared.ProjectLanguageStats })
  languages?: ProjectLanguageStats[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=url-identifier" })
  urlIdentifier?: string;
}
