import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagPathParams extends SpeakeasyBase {
    projectId: string;
    tagId: string;
}
export declare class GetTagQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class GetTagHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetTagRequest extends SpeakeasyBase {
    pathParams: GetTagPathParams;
    queryParams: GetTagQueryParams;
    headers: GetTagHeaders;
}
export declare class GetTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
