import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1BillTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Category" })
  category?: shared.BillTypeCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1BillTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1BillTypesQueryParams;
}


export class GetApiV1BillTypesResponse extends SpeakeasyBase {
  @Metadata()
  billTypeSearchResult?: shared.BillTypeSearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
