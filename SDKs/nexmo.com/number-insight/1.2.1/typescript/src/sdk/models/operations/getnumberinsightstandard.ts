import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumberInsightStandardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightStandardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cnam" })
  cnam?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetNumberInsightStandardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNumberInsightStandardPathParams;

  @Metadata()
  queryParams: GetNumberInsightStandardQueryParams;
}


export class GetNumberInsightStandardResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNumberInsightStandard200ApplicationJsonOneOf?: any;
}
