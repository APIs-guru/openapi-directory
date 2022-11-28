import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LandlordControllerGetProfitLossReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetProfitLossReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetProfitLossReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetProfitLossReportPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetProfitLossReportQueryParams;
}


export class LandlordControllerGetProfitLossReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordProfitLossModel?: shared.LandlordProfitLossModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
