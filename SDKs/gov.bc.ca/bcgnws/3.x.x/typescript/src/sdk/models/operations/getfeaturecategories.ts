import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFeatureCategoriesOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetFeatureCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetFeatureCategoriesOutputFormatEnum;
}


export class GetFeatureCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFeatureCategoriesQueryParams;
}


export class GetFeatureCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
