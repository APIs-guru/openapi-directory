import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGroupGroupTitlePathParams extends SpeakeasyBase {
    groupTitle: string;
}
export declare class DeleteGroupGroupTitleSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class DeleteGroupGroupTitleRequest extends SpeakeasyBase {
    pathParams: DeleteGroupGroupTitlePathParams;
    security: DeleteGroupGroupTitleSecurity;
}
export declare class DeleteGroupGroupTitleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
