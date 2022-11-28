import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetTxsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=block" })
  block?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageNum" })
  pageNum?: number;
}


export class TestnetGetTxsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TestnetGetTxsQueryParams;
}


export class TestnetGetTxsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTxsResponse?: shared.GetTxsResponse;
}
