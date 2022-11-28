import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLinodeIpPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class AddLinodeIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AddLinodeIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AddLinodeIpRequest extends SpeakeasyBase {
    pathParams: AddLinodeIpPathParams;
    request: any;
    security: AddLinodeIpSecurity;
}
export declare class AddLinodeIpResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
    addLinodeIpDefaultApplicationJsonObject?: AddLinodeIpDefaultApplicationJson;
}
