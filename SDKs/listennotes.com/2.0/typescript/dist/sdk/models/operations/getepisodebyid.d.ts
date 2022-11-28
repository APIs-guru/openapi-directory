import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodeByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEpisodeByIdQueryParams extends SpeakeasyBase {
    showTranscript?: number;
}
export declare class GetEpisodeByIdHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetEpisodeByIdRequest extends SpeakeasyBase {
    pathParams: GetEpisodeByIdPathParams;
    queryParams: GetEpisodeByIdQueryParams;
    headers: GetEpisodeByIdHeaders;
}
export declare class GetEpisodeByIdResponse extends SpeakeasyBase {
    contentType: string;
    episodeFull?: shared.EpisodeFull;
    headers: Map<string, string[]>;
    statusCode: number;
}
