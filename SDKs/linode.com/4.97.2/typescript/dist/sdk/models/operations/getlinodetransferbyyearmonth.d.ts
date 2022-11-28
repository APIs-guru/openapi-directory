import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeTransferByYearMonthPathParams extends SpeakeasyBase {
    linodeId: number;
    month: number;
    year: number;
}
export declare class GetLinodeTransferByYearMonthSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeTransferByYearMonthDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeTransferByYearMonthRequest extends SpeakeasyBase {
    pathParams: GetLinodeTransferByYearMonthPathParams;
    security: GetLinodeTransferByYearMonthSecurity;
}
export declare class GetLinodeTransferByYearMonthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeTransferByYearMonth200ApplicationJsonAny?: any;
    getLinodeTransferByYearMonthDefaultApplicationJsonObject?: GetLinodeTransferByYearMonthDefaultApplicationJson;
}
