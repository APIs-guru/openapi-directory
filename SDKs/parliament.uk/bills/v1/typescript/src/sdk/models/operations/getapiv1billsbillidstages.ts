import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1BillsBillIdStagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;
}


export class GetApiV1BillsBillIdStagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1BillsBillIdStagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1BillsBillIdStagesPathParams;

  @Metadata()
  queryParams: GetApiV1BillsBillIdStagesQueryParams;
}


export class GetApiV1BillsBillIdStagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  stageSummarySearchResult?: shared.StageSummarySearchResult;

  @Metadata()
  statusCode: number;
}
