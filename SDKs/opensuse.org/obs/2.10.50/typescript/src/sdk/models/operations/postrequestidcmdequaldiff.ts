import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRequestIdCmdEqualDiffPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostRequestIdCmdEqualDiffViewEnum {
    Xml = "xml"
}

export enum PostRequestIdCmdEqualDiffWithissuesEnum {
    True = "true"
,    One = "1"
}


export class PostRequestIdCmdEqualDiffQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=diff_to_superseded" })
  diffToSuperseded?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: PostRequestIdCmdEqualDiffViewEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=withissues" })
  withissues?: PostRequestIdCmdEqualDiffWithissuesEnum;
}


export class PostRequestIdCmdEqualDiffSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostRequestIdCmdEqualDiffRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRequestIdCmdEqualDiffPathParams;

  @Metadata()
  queryParams: PostRequestIdCmdEqualDiffQueryParams;

  @Metadata()
  security: PostRequestIdCmdEqualDiffSecurity;
}


export class PostRequestIdCmdEqualDiffResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postRequestIdCmdEqualDiff200TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
