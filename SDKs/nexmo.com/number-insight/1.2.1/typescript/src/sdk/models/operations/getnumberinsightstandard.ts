import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumberInsightStandardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightStandardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cnam" })
  cnam?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetNumberInsightStandardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNumberInsightStandardPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNumberInsightStandardQueryParams;
}


export class GetNumberInsightStandardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNumberInsightStandard200ApplicationJsonOneOf?: any;
}
