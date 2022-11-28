import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPodcastsInBatchHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetPodcastsInBatchRequest extends SpeakeasyBase {
    headers: GetPodcastsInBatchHeaders;
    request?: shared.GetPodcastsInBatchForm;
}
export declare class GetPodcastsInBatchResponse extends SpeakeasyBase {
    contentType: string;
    getPodcastsInBatchResponse?: shared.GetPodcastsInBatchResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
