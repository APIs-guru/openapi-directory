import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1ValidationSingleFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1ValidationSingleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1ValidationSingleFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetV1ValidationSingleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV1ValidationSingleQueryParams;
}


export class GetV1ValidationSingleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getV1ValidationSingle200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
