import { SpeakeasyBase } from "../../../internal/utils";
import { Genre } from "./genre";
import { PodcastTypeaheadResult } from "./podcasttypeaheadresult";
export declare class TypeaheadResponse extends SpeakeasyBase {
    genres?: Genre[];
    podcasts?: PodcastTypeaheadResult[];
    terms: string[];
}
