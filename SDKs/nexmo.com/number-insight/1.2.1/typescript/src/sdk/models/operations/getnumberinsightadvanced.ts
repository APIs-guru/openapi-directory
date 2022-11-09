import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumberInsightAdvancedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightAdvancedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cnam" })
  cnam?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=real_time_data" })
  realTimeData?: boolean;
}


export class GetNumberInsightAdvancedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNumberInsightAdvancedPathParams;

  @Metadata()
  queryParams: GetNumberInsightAdvancedQueryParams;
}


export class GetNumberInsightAdvancedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNumberInsightAdvanced200ApplicationJsonOneOf?: any;
}
