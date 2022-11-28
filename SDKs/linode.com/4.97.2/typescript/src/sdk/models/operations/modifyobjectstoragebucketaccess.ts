import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ModifyObjectStorageBucketAccessServerList = [
	"https://api.linode.com/v4",
] as const;


export class ModifyObjectStorageBucketAccessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class ModifyObjectStorageBucketAccessSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class ModifyObjectStorageBucketAccessDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ModifyObjectStorageBucketAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ModifyObjectStorageBucketAccessPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: ModifyObjectStorageBucketAccessSecurity;
}


export class ModifyObjectStorageBucketAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  modifyObjectStorageBucketAccess200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  modifyObjectStorageBucketAccessDefaultApplicationJsonObject?: ModifyObjectStorageBucketAccessDefaultApplicationJson;
}
