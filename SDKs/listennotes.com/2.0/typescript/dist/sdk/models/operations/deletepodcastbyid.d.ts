import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePodcastByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeletePodcastByIdQueryParams extends SpeakeasyBase {
    reason?: string;
}
export declare class DeletePodcastByIdHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class DeletePodcastByIdRequest extends SpeakeasyBase {
    pathParams: DeletePodcastByIdPathParams;
    queryParams: DeletePodcastByIdQueryParams;
    headers: DeletePodcastByIdHeaders;
}
export declare class DeletePodcastByIdResponse extends SpeakeasyBase {
    contentType: string;
    deletePodcastResponse?: shared.DeletePodcastResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
