import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPagesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostPagesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPagesJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PageModify;
}


export class PostPagesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  page?: shared.Page;

  @Metadata()
  statusCode: number;
}
