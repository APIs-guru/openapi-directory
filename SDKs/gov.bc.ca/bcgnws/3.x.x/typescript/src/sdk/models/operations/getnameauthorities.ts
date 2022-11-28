import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNameAuthoritiesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetNameAuthoritiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNameAuthoritiesOutputFormatEnum;
}


export class GetNameAuthoritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNameAuthoritiesQueryParams;
}


export class GetNameAuthoritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
