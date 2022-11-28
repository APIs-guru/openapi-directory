import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AvailableQueryParams extends SpeakeasyBase {
    status?: shared.QuickConnectStateEnum;
}
export declare class AvailableSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AvailableRequest extends SpeakeasyBase {
    queryParams: AvailableQueryParams;
    security: AvailableSecurity;
}
export declare class AvailableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
