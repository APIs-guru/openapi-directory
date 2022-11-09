import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETMAINTENANCE_SERVERS = [
	"https://api.linode.com/v4beta",
];



export class GetMaintenanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetMaintenanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetMaintenanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetMaintenanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetMaintenanceSecurityOption2;
}


export class GetMaintenanceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: GetMaintenanceSecurity;
}


export class GetMaintenance200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Maintenance })
  data?: shared.Maintenance[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetMaintenanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetMaintenanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMaintenance200ApplicationJsonObject?: GetMaintenance200ApplicationJson;

  @Metadata()
  getMaintenanceDefaultApplicationJsonObject?: GetMaintenanceDefaultApplicationJson;
}
