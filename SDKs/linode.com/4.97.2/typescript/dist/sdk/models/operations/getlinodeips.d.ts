import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeIPsPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeIPsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeIPsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeIPsRequest extends SpeakeasyBase {
    pathParams: GetLinodeIPsPathParams;
    security: GetLinodeIPsSecurity;
}
export declare class GetLinodeIPsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeIPs200ApplicationJsonAny?: any;
    getLinodeIPsDefaultApplicationJsonObject?: GetLinodeIPsDefaultApplicationJson;
}
