import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonLoginGroupPathParams extends SpeakeasyBase {
    login: string;
}
export declare class GetPersonLoginGroupSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPersonLoginGroupRequest extends SpeakeasyBase {
    pathParams: GetPersonLoginGroupPathParams;
    security: GetPersonLoginGroupSecurity;
}
export declare class GetPersonLoginGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
