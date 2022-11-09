import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSittingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateFrom" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateTo" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=House" })
  house?: shared.HouseEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetSittingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSittingsQueryParams;
}


export class GetSittingsResponse extends SpeakeasyBase {
  @Metadata()
  billStageSittingSearchResult?: shared.BillStageSittingSearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
