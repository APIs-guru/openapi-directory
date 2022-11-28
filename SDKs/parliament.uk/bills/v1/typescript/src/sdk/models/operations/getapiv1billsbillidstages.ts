import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1BillsBillIdStagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetApiV1BillsBillIdStagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1BillsBillIdStagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1BillsBillIdStagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiV1BillsBillIdStagesQueryParams;
}


export class GetApiV1BillsBillIdStagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  stageSummarySearchResult?: shared.StageSummarySearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
