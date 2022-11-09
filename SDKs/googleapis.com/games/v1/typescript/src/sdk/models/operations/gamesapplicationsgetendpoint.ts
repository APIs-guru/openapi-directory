import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GamesApplicationsGetEndPointEndPointTypeEnum {
    EndPointTypeUnspecified = "END_POINT_TYPE_UNSPECIFIED"
,    ProfileCreation = "PROFILE_CREATION"
,    ProfileSettings = "PROFILE_SETTINGS"
}


export class GamesApplicationsGetEndPointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endPointType" })
  endPointType?: GamesApplicationsGetEndPointEndPointTypeEnum;

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


export class GamesApplicationsGetEndPointSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GamesApplicationsGetEndPointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GamesApplicationsGetEndPointQueryParams;

  @Metadata()
  security: GamesApplicationsGetEndPointSecurity;
}


export class GamesApplicationsGetEndPointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  endPoint?: shared.EndPoint;

  @Metadata()
  statusCode: number;
}
