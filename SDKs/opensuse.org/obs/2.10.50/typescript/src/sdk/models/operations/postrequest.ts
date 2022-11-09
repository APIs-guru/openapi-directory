import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostRequestAddrevisionEnum {
    One = "1"
}

export enum PostRequestCmdEnum {
    Create = "create"
}

export enum PostRequestIgnoreBuildStateEnum {
    One = "1"
}

export enum PostRequestIgnoreDelegateEnum {
    One = "1"
}


export class PostRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addrevision" })
  addrevision?: PostRequestAddrevisionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostRequestCmdEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_build_state" })
  ignoreBuildState?: PostRequestIgnoreBuildStateEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_delegate" })
  ignoreDelegate?: PostRequestIgnoreDelegateEnum;
}


export class PostRequestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRequestQueryParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PostRequestSecurity;
}


export class PostRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
