import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LandlordControllerGetInvetoryReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetInvetoryReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetInvetoryReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetInvetoryReportPathParams;

  @Metadata()
  queryParams: LandlordControllerGetInvetoryReportQueryParams;
}


export class LandlordControllerGetInvetoryReportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
