import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1CategoryListOutputFormatOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1CategoryListOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: GetV1CategoryListOutputFormatOutputFormatEnum;
}

export enum GetV1CategoryListOutputFormatTypeEnum {
    Tech = "tech"
,    User = "user"
,    Regulation = "regulation"
,    Incentive = "incentive"
}


export class GetV1CategoryListOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetV1CategoryListOutputFormatTypeEnum;
}


export class GetV1CategoryListOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1CategoryListOutputFormatPathParams;

  @Metadata()
  queryParams: GetV1CategoryListOutputFormatQueryParams;
}


export class GetV1CategoryListOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
