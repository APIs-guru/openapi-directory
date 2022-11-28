import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CreateTagQueryParams extends SpeakeasyBase {
    description?: string;
    name: string;
}
export declare class CreateTagHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class CreateTagRequest extends SpeakeasyBase {
    pathParams: CreateTagPathParams;
    queryParams: CreateTagQueryParams;
    headers: CreateTagHeaders;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
