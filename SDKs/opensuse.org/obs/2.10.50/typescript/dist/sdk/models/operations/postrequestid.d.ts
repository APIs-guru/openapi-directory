import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRequestIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostRequestIdQueryParams extends SpeakeasyBase {
    byGroup?: string;
    byPackage?: string;
    byProject?: string;
    byUser?: string;
    cmd?: string;
    comment?: string;
    incident?: string;
    newstate?: string;
    priority?: string;
    time?: string;
}
export declare class PostRequestIdSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostRequestIdRequest extends SpeakeasyBase {
    pathParams: PostRequestIdPathParams;
    queryParams: PostRequestIdQueryParams;
    security: PostRequestIdSecurity;
}
export declare class PostRequestIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
