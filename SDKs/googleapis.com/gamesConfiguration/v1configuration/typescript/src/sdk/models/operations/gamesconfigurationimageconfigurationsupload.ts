import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GamesConfigurationImageConfigurationsUploadImageTypeEnum {
    ImageTypeUnspecified = "IMAGE_TYPE_UNSPECIFIED"
,    AchievementIcon = "ACHIEVEMENT_ICON"
,    LeaderboardIcon = "LEADERBOARD_ICON"
}


export class GamesConfigurationImageConfigurationsUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: GamesConfigurationImageConfigurationsUploadImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;
}


export class GamesConfigurationImageConfigurationsUploadQueryParams extends SpeakeasyBase {
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


export class GamesConfigurationImageConfigurationsUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GamesConfigurationImageConfigurationsUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesConfigurationImageConfigurationsUploadPathParams;

  @Metadata()
  queryParams: GamesConfigurationImageConfigurationsUploadQueryParams;

  @Metadata()
  security: GamesConfigurationImageConfigurationsUploadSecurity;
}


export class GamesConfigurationImageConfigurationsUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageConfiguration?: shared.ImageConfiguration;

  @Metadata()
  statusCode: number;
}
