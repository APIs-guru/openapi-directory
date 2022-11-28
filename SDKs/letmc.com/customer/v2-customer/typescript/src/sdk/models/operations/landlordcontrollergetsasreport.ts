import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LandlordControllerGetSasReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetSasReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=yearEnd" })
  yearEnd: number;
}


export class LandlordControllerGetSasReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetSasReportPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetSasReportQueryParams;
}


export class LandlordControllerGetSasReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
