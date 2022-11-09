import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedStatsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedStatsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedStatsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedStatsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedStatsSecurityOption2;
}


export class GetManagedStatsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetManagedStatsSecurity;
}


export class GetManagedStats200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class GetManagedStatsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedStats200ApplicationJsonObject?: GetManagedStats200ApplicationJson;

  @Metadata()
  getManagedStatsDefaultApplicationJsonObject?: GetManagedStatsDefaultApplicationJson;
}
