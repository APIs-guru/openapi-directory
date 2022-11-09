import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryjobStats } from "./queryjobstats";


export class Queryjob extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result-url" })
  resultUrl?: string;

  @Metadata({ data: "json, name=stats" })
  stats?: QueryjobStats;
}
