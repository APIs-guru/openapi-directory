import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryjobResultsOverviewEntry } from "./queryjobresultsoverviewentry";



export class QueryjobResultsOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: QueryjobResultsOverviewEntry })
  data?: QueryjobResultsOverviewEntry[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
