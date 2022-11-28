import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addrevision" })
  addrevision?: PostRequestAddrevisionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" })
  cmd: PostRequestCmdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_build_state" })
  ignoreBuildState?: PostRequestIgnoreBuildStateEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore_delegate" })
  ignoreDelegate?: PostRequestIgnoreDelegateEnum;
}


export class PostRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostRequestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PostRequestSecurity;
}


export class PostRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
