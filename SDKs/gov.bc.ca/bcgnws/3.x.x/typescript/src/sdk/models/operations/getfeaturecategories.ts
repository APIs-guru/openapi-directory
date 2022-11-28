import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFeatureCategoriesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetFeatureCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetFeatureCategoriesOutputFormatEnum;
}


export class GetFeatureCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeatureCategoriesQueryParams;
}


export class GetFeatureCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
