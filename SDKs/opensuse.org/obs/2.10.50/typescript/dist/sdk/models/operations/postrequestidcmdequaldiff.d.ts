import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRequestIdCmdEqualDiffPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PostRequestIdCmdEqualDiffViewEnum {
    Xml = "xml"
}
export declare enum PostRequestIdCmdEqualDiffWithissuesEnum {
    True = "true",
    One = "1"
}
export declare class PostRequestIdCmdEqualDiffQueryParams extends SpeakeasyBase {
    diffToSuperseded?: string;
    view?: PostRequestIdCmdEqualDiffViewEnum;
    withissues?: PostRequestIdCmdEqualDiffWithissuesEnum;
}
export declare class PostRequestIdCmdEqualDiffSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostRequestIdCmdEqualDiffRequest extends SpeakeasyBase {
    pathParams: PostRequestIdCmdEqualDiffPathParams;
    queryParams: PostRequestIdCmdEqualDiffQueryParams;
    security: PostRequestIdCmdEqualDiffSecurity;
}
export declare class PostRequestIdCmdEqualDiffResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postRequestIdCmdEqualDiff200TextPlainString?: string;
    statusCode: number;
}
