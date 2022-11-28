import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeIpPathParams extends SpeakeasyBase {
    address: string;
    linodeId: number;
}
export declare class GetLinodeIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeIpRequest extends SpeakeasyBase {
    pathParams: GetLinodeIpPathParams;
    security: GetLinodeIpSecurity;
}
export declare class GetLinodeIpResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
    getLinodeIpDefaultApplicationJsonObject?: GetLinodeIpDefaultApplicationJson;
}
