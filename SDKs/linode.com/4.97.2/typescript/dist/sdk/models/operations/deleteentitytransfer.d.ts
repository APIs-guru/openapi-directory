import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEntityTransferPathParams extends SpeakeasyBase {
    token: string;
}
export declare class DeleteEntityTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteEntityTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteEntityTransferRequest extends SpeakeasyBase {
    pathParams: DeleteEntityTransferPathParams;
    security: DeleteEntityTransferSecurity;
}
export declare class DeleteEntityTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteEntityTransfer200ApplicationJsonObject?: Map<string, any>;
    deleteEntityTransferDefaultApplicationJsonObject?: DeleteEntityTransferDefaultApplicationJson;
}
