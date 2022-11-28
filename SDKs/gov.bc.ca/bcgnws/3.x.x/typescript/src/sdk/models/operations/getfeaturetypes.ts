import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFeatureTypesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetFeatureTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetFeatureTypesOutputFormatEnum;
}


export class GetFeatureTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeatureTypesQueryParams;
}


export class GetFeatureTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
