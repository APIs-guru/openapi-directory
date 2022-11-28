import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1ValidationSingleFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1ValidationSingleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1ValidationSingleFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetV1ValidationSingleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV1ValidationSingleQueryParams;
}


export class GetV1ValidationSingleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getV1ValidationSingle200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
