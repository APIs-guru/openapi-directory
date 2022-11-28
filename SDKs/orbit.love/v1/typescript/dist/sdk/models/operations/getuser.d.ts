import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetUserRequest extends SpeakeasyBase {
    security: GetUserSecurity;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
