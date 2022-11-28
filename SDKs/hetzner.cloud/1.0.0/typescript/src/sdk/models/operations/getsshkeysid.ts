import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSshKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSshKeysId200ApplicationJsonSshKey extends SpeakeasyBase {
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


export class GetSshKeysId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssh_key" })
  sshKey: GetSshKeysId200ApplicationJsonSshKey;
}


export class GetSshKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSshKeysIdPathParams;
}


export class GetSshKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSshKeysId200ApplicationJsonObject?: GetSshKeysId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
