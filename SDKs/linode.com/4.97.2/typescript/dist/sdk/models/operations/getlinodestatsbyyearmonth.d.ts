import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeStatsByYearMonthPathParams extends SpeakeasyBase {
    linodeId: number;
    month: number;
    year: number;
}
export declare class GetLinodeStatsByYearMonthSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeStatsByYearMonthDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeStatsByYearMonthRequest extends SpeakeasyBase {
    pathParams: GetLinodeStatsByYearMonthPathParams;
    security: GetLinodeStatsByYearMonthSecurity;
}
export declare class GetLinodeStatsByYearMonthResponse extends SpeakeasyBase {
    contentType: string;
    linodeStats?: shared.LinodeStats;
    statusCode: number;
    getLinodeStatsByYearMonthDefaultApplicationJsonObject?: GetLinodeStatsByYearMonthDefaultApplicationJson;
}
