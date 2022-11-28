import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServiceTransferPathParams extends SpeakeasyBase {
    token: string;
}
export declare class GetServiceTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetServiceTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetServiceTransferRequest extends SpeakeasyBase {
    pathParams: GetServiceTransferPathParams;
    security: GetServiceTransferSecurity;
}
export declare class GetServiceTransferResponse extends SpeakeasyBase {
    contentType: string;
    serviceTransfer?: shared.ServiceTransfer;
    statusCode: number;
    getServiceTransferDefaultApplicationJsonObject?: GetServiceTransferDefaultApplicationJson;
}
