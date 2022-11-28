import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AcceptServiceTransferPathParams extends SpeakeasyBase {
    token: string;
}
export declare class AcceptServiceTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AcceptServiceTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AcceptServiceTransferRequest extends SpeakeasyBase {
    pathParams: AcceptServiceTransferPathParams;
    security: AcceptServiceTransferSecurity;
}
export declare class AcceptServiceTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    acceptServiceTransfer200ApplicationJsonObject?: Map<string, any>;
    acceptServiceTransferDefaultApplicationJsonObject?: AcceptServiceTransferDefaultApplicationJson;
}
