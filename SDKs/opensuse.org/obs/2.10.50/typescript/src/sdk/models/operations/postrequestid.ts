import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRequestIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostRequestIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=by_group" })
  byGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=by_package" })
  byPackage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=by_project" })
  byProject?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=by_user" })
  byUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=cmd" })
  cmd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incident" })
  incident?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newstate" })
  newstate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;
}


export class PostRequestIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostRequestIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRequestIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostRequestIdQueryParams;

  @SpeakeasyMetadata()
  security: PostRequestIdSecurity;
}


export class PostRequestIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
