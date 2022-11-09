import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1IdOutputFormatOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1IdOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: GetV1IdOutputFormatOutputFormatEnum;
}


export class GetV1IdOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expired" })
  expired?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=poc" })
  poc?: boolean;
}


export class GetV1IdOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1IdOutputFormatPathParams;

  @Metadata()
  queryParams: GetV1IdOutputFormatQueryParams;
}


export class GetV1IdOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
