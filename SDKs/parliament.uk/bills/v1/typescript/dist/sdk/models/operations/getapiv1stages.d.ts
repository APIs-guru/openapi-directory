import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1StagesQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetApiV1StagesRequest extends SpeakeasyBase {
    queryParams: GetApiV1StagesQueryParams;
}
export declare class GetApiV1StagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    stageReferenceSearchResult?: shared.StageReferenceSearchResult;
    statusCode: number;
}
