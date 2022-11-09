import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryjobResultsOverviewEntry } from "./queryjobresultsoverviewentry";


export class QueryjobResultsOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.QueryjobResultsOverviewEntry })
  data?: QueryjobResultsOverviewEntry[];

  @Metadata({ data: "json, name=next" })
  next?: string;
}
