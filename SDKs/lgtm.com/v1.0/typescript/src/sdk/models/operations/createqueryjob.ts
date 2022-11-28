import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateQueryJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project-id" })
  projectId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects-list" })
  projectsList?: string;
}


export class CreateQueryJobSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class CreateQueryJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateQueryJobQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request: string;

  @SpeakeasyMetadata()
  security: CreateQueryJobSecurity;
}


export class CreateQueryJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  operation?: shared.Operation;
}
