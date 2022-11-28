import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectQueryParams extends SpeakeasyBase {
    secret: string;
}
export declare class ConnectRequest extends SpeakeasyBase {
    queryParams: ConnectQueryParams;
}
export declare class ConnectResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    quickConnectResult?: shared.QuickConnectResult;
    statusCode: number;
}
