import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetSummaryDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetSummaryDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetSummaryDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetSummaryDetailsPathParams;

  @Metadata()
  queryParams: LandlordControllerGetSummaryDetailsQueryParams;
}


export class LandlordControllerGetSummaryDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordSummaryModel?: shared.LandlordSummaryModel;

  @Metadata()
  statusCode: number;
}
