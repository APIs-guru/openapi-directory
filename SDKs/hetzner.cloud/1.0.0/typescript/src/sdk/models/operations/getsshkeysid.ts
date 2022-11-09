import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSshKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSshKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSshKeysIdPathParams;
}


export class GetSshKeysId200ApplicationJsonSshKey extends SpeakeasyBase {
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


export class GetSshKeysId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssh_key" })
  sshKey: GetSshKeysId200ApplicationJsonSshKey;
}


export class GetSshKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSshKeysId200ApplicationJsonObject?: GetSshKeysId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
