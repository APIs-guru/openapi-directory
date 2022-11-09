import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageStats } from "./languagestats";
import { Project } from "./project";


export class Analysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit-id" })
  commitId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=languages", elemType: shared.LanguageStats })
  languages?: LanguageStats[];

  @Metadata({ data: "json, name=log-url" })
  logUrl?: string;

  @Metadata({ data: "json, name=project" })
  project?: Project;

  @Metadata({ data: "json, name=results-url" })
  resultsUrl?: string;
}
