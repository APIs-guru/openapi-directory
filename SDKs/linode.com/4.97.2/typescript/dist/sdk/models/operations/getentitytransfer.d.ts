import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntityTransferPathParams extends SpeakeasyBase {
    token: string;
}
export declare class GetEntityTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetEntityTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetEntityTransferRequest extends SpeakeasyBase {
    pathParams: GetEntityTransferPathParams;
    security: GetEntityTransferSecurity;
}
export declare class GetEntityTransferResponse extends SpeakeasyBase {
    contentType: string;
    entityTransfer?: shared.EntityTransfer;
    statusCode: number;
    getEntityTransferDefaultApplicationJsonObject?: GetEntityTransferDefaultApplicationJson;
}
