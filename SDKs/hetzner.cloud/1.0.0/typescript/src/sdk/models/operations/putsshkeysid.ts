import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSshKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSshKeysIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PutSshKeysId200ApplicationJsonSshKey extends SpeakeasyBase {
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


export class PutSshKeysId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssh_key" })
  sshKey: PutSshKeysId200ApplicationJsonSshKey;
}


export class PutSshKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSshKeysIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutSshKeysIdRequestBody;
}


export class PutSshKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putSshKeysId200ApplicationJsonObject?: PutSshKeysId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
