import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRequestIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostRequestIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=by_group" })
  byGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=by_package" })
  byPackage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=by_project" })
  byProject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=by_user" })
  byUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=cmd" })
  cmd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=comment" })
  comment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=incident" })
  incident?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newstate" })
  newstate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=priority" })
  priority?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;
}


export class PostRequestIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostRequestIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRequestIdPathParams;

  @Metadata()
  queryParams: PostRequestIdQueryParams;

  @Metadata()
  security: PostRequestIdSecurity;
}


export class PostRequestIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
