import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetTxsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=block" })
  block?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageNum" })
  pageNum?: number;
}


export class TestnetGetTxsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TestnetGetTxsQueryParams;
}


export class TestnetGetTxsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTxsResponse?: shared.GetTxsResponse;
}
