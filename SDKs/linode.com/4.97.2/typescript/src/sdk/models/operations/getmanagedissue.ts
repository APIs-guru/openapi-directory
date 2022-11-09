import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedIssuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=issueId" })
  issueId: number;
}


export class GetManagedIssueSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedIssueSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedIssueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedIssueSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedIssueSecurityOption2;
}


export class GetManagedIssueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetManagedIssuePathParams;

  @Metadata()
  security: GetManagedIssueSecurity;
}


export class GetManagedIssueDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedIssueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedIssue?: shared.ManagedIssue;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedIssueDefaultApplicationJsonObject?: GetManagedIssueDefaultApplicationJson;
}
