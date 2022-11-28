import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServerLogsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetServerLogsRequest extends SpeakeasyBase {
    security: GetServerLogsSecurity;
}
export declare class GetServerLogsResponse extends SpeakeasyBase {
    contentType: string;
    logFiles?: shared.LogFile[];
    statusCode: number;
}
