import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1BillTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Category" })
  category?: shared.BillTypeCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1BillTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1BillTypesQueryParams;
}


export class GetApiV1BillTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billTypeSearchResult?: shared.BillTypeSearchResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
