import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateObjectStorageSslServerList = [
	"https://api.linode.com/v4",
] as const;


export class CreateObjectStorageSslPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class CreateObjectStorageSslSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateObjectStorageSslRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateObjectStorageSslPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectStorageSsl;

  @SpeakeasyMetadata()
  security: CreateObjectStorageSslSecurity;
}


export class CreateObjectStorageSslResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectStorageSslResponse?: shared.ObjectStorageSslResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createObjectStorageSslDefaultApplicationJsonObject?: CreateObjectStorageSslDefaultApplicationJson;
}
