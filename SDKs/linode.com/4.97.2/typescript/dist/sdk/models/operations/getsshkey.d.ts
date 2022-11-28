import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSshKeyPathParams extends SpeakeasyBase {
    sshKeyId: number;
}
export declare class GetSshKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetSshKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetSshKeyRequest extends SpeakeasyBase {
    pathParams: GetSshKeyPathParams;
    security: GetSshKeySecurity;
}
export declare class GetSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    sshKey?: shared.SshKey;
    statusCode: number;
    getSshKeyDefaultApplicationJsonObject?: GetSshKeyDefaultApplicationJson;
}
