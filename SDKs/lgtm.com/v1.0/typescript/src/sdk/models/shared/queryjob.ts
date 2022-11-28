import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryjobStats } from "./queryjobstats";



export class Queryjob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result-url" })
  resultUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: QueryjobStats;
}
