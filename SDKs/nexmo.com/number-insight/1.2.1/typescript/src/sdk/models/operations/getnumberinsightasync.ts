import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumberInsightAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightAsyncQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cnam" })
  cnam?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetNumberInsightAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNumberInsightAsyncPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNumberInsightAsyncQueryParams;
}


export class GetNumberInsightAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNumberInsightAsync200ApplicationJsonOneOf?: any;
}
