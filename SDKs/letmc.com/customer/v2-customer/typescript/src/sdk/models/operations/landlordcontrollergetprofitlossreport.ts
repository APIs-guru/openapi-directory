import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetProfitLossReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetProfitLossReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetProfitLossReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetProfitLossReportPathParams;

  @Metadata()
  queryParams: LandlordControllerGetProfitLossReportQueryParams;
}


export class LandlordControllerGetProfitLossReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordProfitLossModel?: shared.LandlordProfitLossModel;

  @Metadata()
  statusCode: number;
}
