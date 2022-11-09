import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIssuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert-key" })
  alertKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class GetIssueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetIssueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIssuePathParams;

  @Metadata()
  security: GetIssueSecurity;
}


export class GetIssueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getIssue200ApplicationSarifPlusJsonObject?: Map<string, any>;
}
