import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectLanguageStats } from "./projectlanguagestats";



export class ProjectDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=languages", elemType: ProjectLanguageStats })
  languages?: ProjectLanguageStats[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=url-identifier" })
  urlIdentifier?: string;
}
