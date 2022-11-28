import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSshKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AddSshKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AddSshKeyRequest extends SpeakeasyBase {
    request?: shared.SshKeyRequest;
    security: AddSshKeySecurity;
}
export declare class AddSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    sshKey?: shared.SshKey;
    statusCode: number;
    addSshKeyDefaultApplicationJsonObject?: AddSshKeyDefaultApplicationJson;
}
