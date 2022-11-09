import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFeatureTypesOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetFeatureTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetFeatureTypesOutputFormatEnum;
}


export class GetFeatureTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFeatureTypesQueryParams;
}


export class GetFeatureTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
