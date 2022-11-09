import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedContactsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetManagedContactsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedContactsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedContactsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedContactsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedContactsSecurityOption2;
}


export class GetManagedContactsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetManagedContactsQueryParams;

  @Metadata()
  security: GetManagedContactsSecurity;
}


export class GetManagedContacts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ManagedContact })
  data?: shared.ManagedContact[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetManagedContactsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedContactsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedContacts200ApplicationJsonObject?: GetManagedContacts200ApplicationJson;

  @Metadata()
  getManagedContactsDefaultApplicationJsonObject?: GetManagedContactsDefaultApplicationJson;
}
