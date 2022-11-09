import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSshKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetSshKeysSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetSshKeysSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSshKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSshKeysSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSshKeysSecurityOption2;
}


export class GetSshKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSshKeysQueryParams;

  @Metadata()
  security: GetSshKeysSecurity;
}


export class GetSshKeys200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SshKey })
  data?: shared.SshKey[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetSshKeysDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSshKeys200ApplicationJsonObject?: GetSshKeys200ApplicationJson;

  @Metadata()
  getSshKeysDefaultApplicationJsonObject?: GetSshKeysDefaultApplicationJson;
}
