import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryFiltersLegacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=OfficialRatings" })
  officialRatings?: string[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=Years" })
  years?: number[];
}
