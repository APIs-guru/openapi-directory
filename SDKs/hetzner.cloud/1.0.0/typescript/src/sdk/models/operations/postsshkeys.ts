import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSshKeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class PostSshKeys201ApplicationJsonSshKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class PostSshKeys201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssh_key" })
  sshKey: PostSshKeys201ApplicationJsonSshKey;
}


export class PostSshKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSshKeysRequestBody;
}


export class PostSshKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSshKeys201ApplicationJsonObject?: PostSshKeys201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
