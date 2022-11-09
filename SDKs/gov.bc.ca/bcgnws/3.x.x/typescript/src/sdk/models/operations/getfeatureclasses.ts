import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFeatureClassesOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetFeatureClassesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetFeatureClassesOutputFormatEnum;
}


export class GetFeatureClassesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFeatureClassesQueryParams;
}


export class GetFeatureClassesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
