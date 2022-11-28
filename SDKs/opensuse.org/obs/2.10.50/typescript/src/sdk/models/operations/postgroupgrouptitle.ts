import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGroupGroupTitlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_title" })
  groupTitle: string;
}

export enum PostGroupGroupTitleCmdEnum {
    AddUser = "add_user",
    RemoveUser = "remove_user",
    SetEmail = "set_email"
}


export class PostGroupGroupTitleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd?: PostGroupGroupTitleCmdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userid" })
  userid?: string;
}


export class PostGroupGroupTitleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostGroupGroupTitleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostGroupGroupTitlePathParams;

  @SpeakeasyMetadata()
  queryParams: PostGroupGroupTitleQueryParams;

  @SpeakeasyMetadata()
  security: PostGroupGroupTitleSecurity;
}


export class PostGroupGroupTitleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
