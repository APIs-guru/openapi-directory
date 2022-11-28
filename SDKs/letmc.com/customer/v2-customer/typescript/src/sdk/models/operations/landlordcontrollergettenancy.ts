import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LandlordControllerGetTenancyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetTenancyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetTenancyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetTenancyPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetTenancyQueryParams;
}


export class LandlordControllerGetTenancyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordTenancyModel?: shared.LandlordTenancyModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
