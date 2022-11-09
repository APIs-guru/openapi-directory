import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryFiltersLegacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Genres" })
  genres?: string[];

  @Metadata({ data: "json, name=OfficialRatings" })
  officialRatings?: string[];

  @Metadata({ data: "json, name=Tags" })
  tags?: string[];

  @Metadata({ data: "json, name=Years" })
  years?: number[];
}
