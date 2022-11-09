import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNameAuthoritiesOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetNameAuthoritiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetNameAuthoritiesOutputFormatEnum;
}


export class GetNameAuthoritiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetNameAuthoritiesQueryParams;
}


export class GetNameAuthoritiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
