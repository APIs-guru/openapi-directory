import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LandlordControllerGetSummaryDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetSummaryDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetSummaryDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetSummaryDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetSummaryDetailsQueryParams;
}


export class LandlordControllerGetSummaryDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordSummaryModel?: shared.LandlordSummaryModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
