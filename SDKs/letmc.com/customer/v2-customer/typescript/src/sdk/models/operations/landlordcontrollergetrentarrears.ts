import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LandlordControllerGetRentArrearsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetRentArrearsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetRentArrearsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetRentArrearsPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetRentArrearsQueryParams;
}


export class LandlordControllerGetRentArrearsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordRentArrearsModel?: shared.LandlordRentArrearsModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
