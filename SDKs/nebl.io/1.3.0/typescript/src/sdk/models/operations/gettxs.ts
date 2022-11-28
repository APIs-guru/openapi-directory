import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTxsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=block" })
  block?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageNum" })
  pageNum?: number;
}


export class GetTxsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTxsQueryParams;
}


export class GetTxsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTxsResponse?: shared.GetTxsResponse;
}
