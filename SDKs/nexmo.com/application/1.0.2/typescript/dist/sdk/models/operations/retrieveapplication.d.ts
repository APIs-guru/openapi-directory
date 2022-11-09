import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RetrieveApplicationPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class RetrieveApplicationQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class RetrieveApplicationRequest extends SpeakeasyBase {
    pathParams: RetrieveApplicationPathParams;
    queryParams: RetrieveApplicationQueryParams;
}
export declare class RetrieveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    application?: shared.Application;
}
