import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSshKeyPathParams extends SpeakeasyBase {
    sshKeyId: number;
}
export declare class DeleteSshKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteSshKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteSshKeyRequest extends SpeakeasyBase {
    pathParams: DeleteSshKeyPathParams;
    security: DeleteSshKeySecurity;
}
export declare class DeleteSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteSshKey200ApplicationJsonObject?: Map<string, any>;
    deleteSshKeyDefaultApplicationJsonObject?: DeleteSshKeyDefaultApplicationJson;
}
