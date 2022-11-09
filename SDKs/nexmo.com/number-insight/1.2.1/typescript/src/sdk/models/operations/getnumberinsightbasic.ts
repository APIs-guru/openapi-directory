import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNumberInsightBasicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightBasicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetNumberInsightBasicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNumberInsightBasicPathParams;

  @Metadata()
  queryParams: GetNumberInsightBasicQueryParams;
}


export class GetNumberInsightBasicResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  niResponseJsonBasic?: shared.NiResponseJsonBasic;
}
