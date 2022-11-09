import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGETRANSFER_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageTransferSecurityOption2;
}


export class GetObjectStorageTransferRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: GetObjectStorageTransferSecurity;
}


export class GetObjectStorageTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageTransfer200ApplicationJsonAny?: any;

  @Metadata()
  getObjectStorageTransferDefaultApplicationJsonObject?: GetObjectStorageTransferDefaultApplicationJson;
}
