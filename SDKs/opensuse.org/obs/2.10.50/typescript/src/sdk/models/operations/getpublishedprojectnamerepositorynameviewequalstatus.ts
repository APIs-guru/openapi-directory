import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}

export enum GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum {
    Status = "status"
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum;
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams;

  @SpeakeasyMetadata()
  security: GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity;
}


export class GetPublishedProjectNameRepositoryNameViewEqualStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
