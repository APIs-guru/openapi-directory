import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitPodcastHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class SubmitPodcastRequest extends SpeakeasyBase {
    headers: SubmitPodcastHeaders;
    request: shared.SubmitPodcastForm;
}
export declare class SubmitPodcastResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    submitPodcastResponse?: shared.SubmitPodcastResponse;
}
