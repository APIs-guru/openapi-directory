import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetManagedIssuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issueId" })
  issueId: number;
}


export class GetManagedIssueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetManagedIssueDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedIssueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetManagedIssuePathParams;

  @SpeakeasyMetadata()
  security: GetManagedIssueSecurity;
}


export class GetManagedIssueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedIssue?: shared.ManagedIssue;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getManagedIssueDefaultApplicationJsonObject?: GetManagedIssueDefaultApplicationJson;
}
