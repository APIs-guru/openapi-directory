import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetJurisdictionFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetJurisdictionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetJurisdictionFormatEnum;
}


export class GetJurisdictionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetJurisdictionQueryParams;
}


export class GetJurisdictionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
