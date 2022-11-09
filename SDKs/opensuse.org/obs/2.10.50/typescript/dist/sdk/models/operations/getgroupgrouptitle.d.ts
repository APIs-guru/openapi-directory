import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetGroupGroupTitlePathParams extends SpeakeasyBase {
    groupTitle: string;
}
export declare class GetGroupGroupTitleSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetGroupGroupTitleRequest extends SpeakeasyBase {
    pathParams: GetGroupGroupTitlePathParams;
    security: GetGroupGroupTitleSecurity;
}
export declare class GetGroupGroupTitleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
