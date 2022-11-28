import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAreasFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetAreasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetAreasFormatEnum;
}


export class GetAreasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAreasQueryParams;
}


export class GetAreasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
