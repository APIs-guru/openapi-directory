import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteImageRegionsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteImageRegionsQueryParams extends SpeakeasyBase {
    regionIds: string[];
}
export declare class DeleteImageRegionsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteImageRegionsRequest extends SpeakeasyBase {
    pathParams: DeleteImageRegionsPathParams;
    queryParams: DeleteImageRegionsQueryParams;
    headers: DeleteImageRegionsHeaders;
}
export declare class DeleteImageRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
