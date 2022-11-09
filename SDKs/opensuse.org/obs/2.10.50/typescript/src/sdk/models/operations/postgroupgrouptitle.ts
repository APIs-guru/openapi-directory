import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGroupGroupTitlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}

export enum PostGroupGroupTitleCmdEnum {
    AddUser = "add_user"
,    RemoveUser = "remove_user"
,    SetEmail = "set_email"
}


export class PostGroupGroupTitleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd?: PostGroupGroupTitleCmdEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userid" })
  userid?: string;
}


export class PostGroupGroupTitleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostGroupGroupTitleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostGroupGroupTitlePathParams;

  @Metadata()
  queryParams: PostGroupGroupTitleQueryParams;

  @Metadata()
  security: PostGroupGroupTitleSecurity;
}


export class PostGroupGroupTitleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
