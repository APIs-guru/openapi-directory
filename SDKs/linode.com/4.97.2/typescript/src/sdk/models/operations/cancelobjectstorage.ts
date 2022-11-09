import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CANCELOBJECTSTORAGE_SERVERS = [
	"https://api.linode.com/v4",
];



export class CancelObjectStorageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CancelObjectStorageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CancelObjectStorageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CancelObjectStorageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CancelObjectStorageSecurityOption2;
}


export class CancelObjectStorageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: CancelObjectStorageSecurity;
}


export class CancelObjectStorageDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CancelObjectStorageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cancelObjectStorage200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  cancelObjectStorageDefaultApplicationJsonObject?: CancelObjectStorageDefaultApplicationJson;
}
