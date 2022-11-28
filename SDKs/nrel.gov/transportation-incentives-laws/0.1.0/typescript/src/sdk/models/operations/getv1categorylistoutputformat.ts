import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1CategoryListOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1CategoryListOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: GetV1CategoryListOutputFormatOutputFormatEnum;
}

export enum GetV1CategoryListOutputFormatTypeEnum {
    Tech = "tech",
    User = "user",
    Regulation = "regulation",
    Incentive = "incentive"
}


export class GetV1CategoryListOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetV1CategoryListOutputFormatTypeEnum;
}


export class GetV1CategoryListOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CategoryListOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CategoryListOutputFormatQueryParams;
}


export class GetV1CategoryListOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
