import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumberInsightAsyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightAsyncQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cnam" })
  cnam?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetNumberInsightAsyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNumberInsightAsyncPathParams;

  @Metadata()
  queryParams: GetNumberInsightAsyncQueryParams;
}


export class GetNumberInsightAsyncResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNumberInsightAsync200ApplicationJsonOneOf?: any;
}
