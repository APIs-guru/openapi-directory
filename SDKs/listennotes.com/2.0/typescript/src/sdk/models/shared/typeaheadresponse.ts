import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Genre } from "./genre";
import { PodcastTypeaheadResult } from "./podcasttypeaheadresult";


export class TypeaheadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=genres", elemType: shared.Genre })
  genres?: Genre[];

  @Metadata({ data: "json, name=podcasts", elemType: shared.PodcastTypeaheadResult })
  podcasts?: PodcastTypeaheadResult[];

  @Metadata({ data: "json, name=terms" })
  terms: string[];
}
