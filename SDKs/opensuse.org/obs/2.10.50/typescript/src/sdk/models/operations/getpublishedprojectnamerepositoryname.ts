import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublishedProjectNameRepositoryNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetPublishedProjectNameRepositoryNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRepositoryNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublishedProjectNameRepositoryNamePathParams;

  @SpeakeasyMetadata()
  security: GetPublishedProjectNameRepositoryNameSecurity;
}


export class GetPublishedProjectNameRepositoryNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
