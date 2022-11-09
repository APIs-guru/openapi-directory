import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectByUrlIdentifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class GetProjectByUrlIdentifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectByUrlIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectByUrlIdentifierPathParams;

  @Metadata()
  security: GetProjectByUrlIdentifierSecurity;
}


export class GetProjectByUrlIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  projectDetails?: shared.ProjectDetails;
}
