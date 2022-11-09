import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedIssuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetManagedIssuesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedIssuesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedIssuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedIssuesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedIssuesSecurityOption2;
}


export class GetManagedIssuesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetManagedIssuesQueryParams;

  @Metadata()
  security: GetManagedIssuesSecurity;
}


export class GetManagedIssues200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ManagedIssue })
  data?: shared.ManagedIssue[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetManagedIssuesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedIssuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedIssues200ApplicationJsonObject?: GetManagedIssues200ApplicationJson;

  @Metadata()
  getManagedIssuesDefaultApplicationJsonObject?: GetManagedIssuesDefaultApplicationJson;
}
