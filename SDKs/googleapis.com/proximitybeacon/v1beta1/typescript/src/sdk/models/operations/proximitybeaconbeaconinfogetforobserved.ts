import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProximitybeaconBeaconinfoGetforobservedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ProximitybeaconBeaconinfoGetforobservedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ProximitybeaconBeaconinfoGetforobservedQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GetInfoForObservedBeaconsRequest;
}


export class ProximitybeaconBeaconinfoGetforobservedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInfoForObservedBeaconsResponse?: shared.GetInfoForObservedBeaconsResponse;

  @Metadata()
  statusCode: number;
}
