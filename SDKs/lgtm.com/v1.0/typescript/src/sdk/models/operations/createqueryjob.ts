import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateQueryJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project-id" })
  projectId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=projects-list" })
  projectsList?: string;
}


export class CreateQueryJobSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class CreateQueryJobRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateQueryJobQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request: string;

  @Metadata()
  security: CreateQueryJobSecurity;
}


export class CreateQueryJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  operation?: shared.Operation;
}
