import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}

export enum GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum {
    Status = "status"
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum;
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams;

  @Metadata()
  queryParams: GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams;

  @Metadata()
  security: GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity;
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
