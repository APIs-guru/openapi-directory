import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumberInsightAdvancedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightAdvancedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cnam" })
  cnam?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=real_time_data" })
  realTimeData?: boolean;
}


export class GetNumberInsightAdvancedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNumberInsightAdvancedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNumberInsightAdvancedQueryParams;
}


export class GetNumberInsightAdvancedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNumberInsightAdvanced200ApplicationJsonOneOf?: any;
}
