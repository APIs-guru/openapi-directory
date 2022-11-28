import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServiceTransferPathParams extends SpeakeasyBase {
    token: string;
}
export declare class DeleteServiceTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteServiceTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteServiceTransferRequest extends SpeakeasyBase {
    pathParams: DeleteServiceTransferPathParams;
    security: DeleteServiceTransferSecurity;
}
export declare class DeleteServiceTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteServiceTransfer200ApplicationJsonObject?: Map<string, any>;
    deleteServiceTransferDefaultApplicationJsonObject?: DeleteServiceTransferDefaultApplicationJson;
}
