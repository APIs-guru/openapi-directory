import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSshKeyPathParams extends SpeakeasyBase {
    sshKeyId: number;
}
export declare class UpdateSshKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateSshKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateSshKeyRequest extends SpeakeasyBase {
    pathParams: UpdateSshKeyPathParams;
    request: shared.SshKeyInput;
    security: UpdateSshKeySecurity;
}
export declare class UpdateSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    sshKey?: shared.SshKey;
    statusCode: number;
    updateSshKeyDefaultApplicationJsonObject?: UpdateSshKeyDefaultApplicationJson;
}
