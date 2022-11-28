import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteObjectStorageSslServerList = [
	"https://api.linode.com/v4",
] as const;


export class DeleteObjectStorageSslPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class DeleteObjectStorageSslSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteObjectStorageSslRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteObjectStorageSslPathParams;

  @SpeakeasyMetadata()
  security: DeleteObjectStorageSslSecurity;
}


export class DeleteObjectStorageSslResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteObjectStorageSsl200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteObjectStorageSslDefaultApplicationJsonObject?: DeleteObjectStorageSslDefaultApplicationJson;
}
