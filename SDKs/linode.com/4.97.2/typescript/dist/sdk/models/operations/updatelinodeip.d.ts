import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLinodeIpPathParams extends SpeakeasyBase {
    address: string;
    linodeId: number;
}
export declare class UpdateLinodeIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateLinodeIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateLinodeIpRequest extends SpeakeasyBase {
    pathParams: UpdateLinodeIpPathParams;
    request?: shared.IpAddressInput;
    security: UpdateLinodeIpSecurity;
}
export declare class UpdateLinodeIpResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
    updateLinodeIpDefaultApplicationJsonObject?: UpdateLinodeIpDefaultApplicationJson;
}
