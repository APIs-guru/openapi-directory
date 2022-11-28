import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryJobPathParams extends SpeakeasyBase {
    queryjobId: string;
}
export declare class GetQueryJobSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetQueryJobRequest extends SpeakeasyBase {
    pathParams: GetQueryJobPathParams;
    security: GetQueryJobSecurity;
}
export declare class GetQueryJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    queryjob?: shared.Queryjob;
}
