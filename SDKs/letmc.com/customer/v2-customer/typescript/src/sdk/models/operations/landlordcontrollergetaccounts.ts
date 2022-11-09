import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetAccountsPathParams;

  @Metadata()
  queryParams: LandlordControllerGetAccountsQueryParams;
}


export class LandlordControllerGetAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordAccountingModel?: shared.LandlordAccountingModel;

  @Metadata()
  statusCode: number;
}
