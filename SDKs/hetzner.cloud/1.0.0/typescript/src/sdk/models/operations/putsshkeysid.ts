import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutSshKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSshKeysIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutSshKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSshKeysIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutSshKeysIdRequestBody;
}


export class PutSshKeysId200ApplicationJsonSshKey extends SpeakeasyBase {
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


export class PutSshKeysId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssh_key" })
  sshKey: PutSshKeysId200ApplicationJsonSshKey;
}


export class PutSshKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putSshKeysId200ApplicationJsonObject?: PutSshKeysId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
