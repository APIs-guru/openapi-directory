import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LandlordControllerGetSasReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetSasReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=yearEnd" })
  yearEnd: number;
}


export class LandlordControllerGetSasReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetSasReportPathParams;

  @Metadata()
  queryParams: LandlordControllerGetSasReportQueryParams;
}


export class LandlordControllerGetSasReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
