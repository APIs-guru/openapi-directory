import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetRentArrearsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetRentArrearsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetRentArrearsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetRentArrearsPathParams;

  @Metadata()
  queryParams: LandlordControllerGetRentArrearsQueryParams;
}


export class LandlordControllerGetRentArrearsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordRentArrearsModel?: shared.LandlordRentArrearsModel;

  @Metadata()
  statusCode: number;
}
