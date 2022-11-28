import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCuratedPodcastByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCuratedPodcastByIdHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetCuratedPodcastByIdRequest extends SpeakeasyBase {
    pathParams: GetCuratedPodcastByIdPathParams;
    headers: GetCuratedPodcastByIdHeaders;
}
export declare class GetCuratedPodcastByIdResponse extends SpeakeasyBase {
    contentType: string;
    curatedListFull?: shared.CuratedListFull;
    headers: Map<string, string[]>;
    statusCode: number;
}
