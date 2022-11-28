import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSshKeysIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSshKeysIdRequestBody extends SpeakeasyBase {
    labels?: Map<string, any>;
    name?: string;
}
export declare class PutSshKeysId200ApplicationJsonSshKey extends SpeakeasyBase {
    created: string;
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    publicKey: string;
}
export declare class PutSshKeysId200ApplicationJson extends SpeakeasyBase {
    sshKey: PutSshKeysId200ApplicationJsonSshKey;
}
export declare class PutSshKeysIdRequest extends SpeakeasyBase {
    pathParams: PutSshKeysIdPathParams;
    request?: PutSshKeysIdRequestBody;
}
export declare class PutSshKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    putSshKeysId200ApplicationJsonObject?: PutSshKeysId200ApplicationJson;
    statusCode: number;
}
