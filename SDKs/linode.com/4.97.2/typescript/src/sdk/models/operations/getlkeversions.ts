import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeVersionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeVersionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeVersionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeVersionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeVersionsSecurityOption2;
}


export class GetLkeVersionsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetLkeVersionsSecurity;
}


export class GetLkeVersions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LkeVersion })
  data?: shared.LkeVersion[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLkeVersionsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeVersions200ApplicationJsonObject?: GetLkeVersions200ApplicationJson;

  @Metadata()
  getLkeVersionsDefaultApplicationJsonObject?: GetLkeVersionsDefaultApplicationJson;
}
