import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetTenancyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetTenancyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetTenancyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetTenancyPathParams;

  @Metadata()
  queryParams: LandlordControllerGetTenancyQueryParams;
}


export class LandlordControllerGetTenancyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordTenancyModel?: shared.LandlordTenancyModel;

  @Metadata()
  statusCode: number;
}
