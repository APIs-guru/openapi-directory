import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeTransferPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeTransferRequest extends SpeakeasyBase {
    pathParams: GetLinodeTransferPathParams;
    security: GetLinodeTransferSecurity;
}
export declare class GetLinodeTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeTransfer200ApplicationJsonAny?: any;
    getLinodeTransferDefaultApplicationJsonObject?: GetLinodeTransferDefaultApplicationJson;
}
