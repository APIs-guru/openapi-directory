import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileAppsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetProfileAppsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetProfileAppsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetProfileAppsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProfileAppsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProfileAppsSecurityOption2;
}


export class GetProfileAppsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProfileAppsQueryParams;

  @Metadata()
  security: GetProfileAppsSecurity;
}


export class GetProfileApps200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.AuthorizedApp })
  data?: shared.AuthorizedApp[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetProfileAppsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetProfileAppsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProfileApps200ApplicationJsonObject?: GetProfileApps200ApplicationJson;

  @Metadata()
  getProfileAppsDefaultApplicationJsonObject?: GetProfileAppsDefaultApplicationJson;
}
