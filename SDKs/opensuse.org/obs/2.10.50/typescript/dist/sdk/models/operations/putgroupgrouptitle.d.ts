import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutGroupGroupTitlePathParams extends SpeakeasyBase {
    groupTitle: string;
}
export declare class PutGroupGroupTitleSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PutGroupGroupTitleRequest extends SpeakeasyBase {
    pathParams: PutGroupGroupTitlePathParams;
    request: Uint8Array;
    security: PutGroupGroupTitleSecurity;
}
export declare class PutGroupGroupTitleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
