import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNumberInsightBasicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class GetNumberInsightBasicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class GetNumberInsightBasicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNumberInsightBasicPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNumberInsightBasicQueryParams;
}


export class GetNumberInsightBasicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  niResponseJsonBasic?: shared.NiResponseJsonBasic;
}
