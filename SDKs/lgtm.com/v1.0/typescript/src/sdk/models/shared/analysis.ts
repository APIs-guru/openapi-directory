import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageStats } from "./languagestats";
import { Project } from "./project";



export class Analysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit-id" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=languages", elemType: LanguageStats })
  languages?: LanguageStats[];

  @SpeakeasyMetadata({ data: "json, name=log-url" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;

  @SpeakeasyMetadata({ data: "json, name=results-url" })
  resultsUrl?: string;
}
