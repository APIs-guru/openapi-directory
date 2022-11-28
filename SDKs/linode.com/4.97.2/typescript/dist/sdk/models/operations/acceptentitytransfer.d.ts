import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AcceptEntityTransferPathParams extends SpeakeasyBase {
    token: string;
}
export declare class AcceptEntityTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AcceptEntityTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AcceptEntityTransferRequest extends SpeakeasyBase {
    pathParams: AcceptEntityTransferPathParams;
    security: AcceptEntityTransferSecurity;
}
export declare class AcceptEntityTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    acceptEntityTransfer200ApplicationJsonObject?: Map<string, any>;
    acceptEntityTransferDefaultApplicationJsonObject?: AcceptEntityTransferDefaultApplicationJson;
}
