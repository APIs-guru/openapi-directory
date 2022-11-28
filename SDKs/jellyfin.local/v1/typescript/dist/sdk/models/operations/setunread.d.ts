import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetUnreadPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SetUnreadSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetUnreadRequest extends SpeakeasyBase {
    pathParams: SetUnreadPathParams;
    security: SetUnreadSecurity;
}
export declare class SetUnreadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
