import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRequestIdCmdEqualDiffPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostRequestIdCmdEqualDiffViewEnum {
    Xml = "xml"
}

export enum PostRequestIdCmdEqualDiffWithissuesEnum {
    True = "true",
    One = "1"
}


export class PostRequestIdCmdEqualDiffQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=diff_to_superseded" })
  diffToSuperseded?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: PostRequestIdCmdEqualDiffViewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withissues" })
  withissues?: PostRequestIdCmdEqualDiffWithissuesEnum;
}


export class PostRequestIdCmdEqualDiffSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostRequestIdCmdEqualDiffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRequestIdCmdEqualDiffPathParams;

  @SpeakeasyMetadata()
  queryParams: PostRequestIdCmdEqualDiffQueryParams;

  @SpeakeasyMetadata()
  security: PostRequestIdCmdEqualDiffSecurity;
}


export class PostRequestIdCmdEqualDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postRequestIdCmdEqualDiff200TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
