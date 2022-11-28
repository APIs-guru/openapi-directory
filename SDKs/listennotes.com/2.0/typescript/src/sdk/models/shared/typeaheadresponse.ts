import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Genre } from "./genre";
import { PodcastTypeaheadResult } from "./podcasttypeaheadresult";



export class TypeaheadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genres", elemType: Genre })
  genres?: Genre[];

  @SpeakeasyMetadata({ data: "json, name=podcasts", elemType: PodcastTypeaheadResult })
  podcasts?: PodcastTypeaheadResult[];

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms: string[];
}
