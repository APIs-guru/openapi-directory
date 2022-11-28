import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSshKeysRequestBody extends SpeakeasyBase {
    labels?: Map<string, any>;
    name: string;
    publicKey: string;
}
export declare class PostSshKeys201ApplicationJsonSshKey extends SpeakeasyBase {
    created: string;
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    publicKey: string;
}
export declare class PostSshKeys201ApplicationJson extends SpeakeasyBase {
    sshKey: PostSshKeys201ApplicationJsonSshKey;
}
export declare class PostSshKeysRequest extends SpeakeasyBase {
    request?: PostSshKeysRequestBody;
}
export declare class PostSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    postSshKeys201ApplicationJsonObject?: PostSshKeys201ApplicationJson;
    statusCode: number;
}
