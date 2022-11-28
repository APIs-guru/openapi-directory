import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeStatsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeStatsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeStatsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeStatsRequest extends SpeakeasyBase {
    pathParams: GetLinodeStatsPathParams;
    security: GetLinodeStatsSecurity;
}
export declare class GetLinodeStatsResponse extends SpeakeasyBase {
    contentType: string;
    linodeStats?: shared.LinodeStats;
    statusCode: number;
    getLinodeStatsDefaultApplicationJsonObject?: GetLinodeStatsDefaultApplicationJson;
}
