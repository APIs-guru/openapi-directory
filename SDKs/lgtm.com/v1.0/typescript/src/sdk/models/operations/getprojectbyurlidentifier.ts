import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectByUrlIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class GetProjectByUrlIdentifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetProjectByUrlIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectByUrlIdentifierPathParams;

  @SpeakeasyMetadata()
  security: GetProjectByUrlIdentifierSecurity;
}


export class GetProjectByUrlIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  projectDetails?: shared.ProjectDetails;
}
