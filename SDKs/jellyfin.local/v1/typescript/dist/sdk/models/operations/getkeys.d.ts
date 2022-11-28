import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKeysSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetKeysRequest extends SpeakeasyBase {
    security: GetKeysSecurity;
}
export declare class GetKeysResponse extends SpeakeasyBase {
    authenticationInfoQueryResult?: shared.AuthenticationInfoQueryResult;
    contentType: string;
    statusCode: number;
}
