import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSshKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class PostSshKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostSshKeysRequestBody;
}


export class PostSshKeys201ApplicationJsonSshKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class PostSshKeys201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssh_key" })
  sshKey: PostSshKeys201ApplicationJsonSshKey;
}


export class PostSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSshKeys201ApplicationJsonObject?: PostSshKeys201ApplicationJson;

  @Metadata()
  statusCode: number;
}
