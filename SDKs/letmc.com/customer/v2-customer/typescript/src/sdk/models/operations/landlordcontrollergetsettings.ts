import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetSettingsPathParams;

  @Metadata()
  queryParams: LandlordControllerGetSettingsQueryParams;
}


export class LandlordControllerGetSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordSettingsModel?: shared.LandlordSettingsModel;

  @Metadata()
  statusCode: number;
}
