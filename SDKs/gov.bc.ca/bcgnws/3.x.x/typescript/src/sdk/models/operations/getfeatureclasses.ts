import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFeatureClassesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetFeatureClassesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" })
  outputFormat: GetFeatureClassesOutputFormatEnum;
}


export class GetFeatureClassesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeatureClassesQueryParams;
}


export class GetFeatureClassesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
