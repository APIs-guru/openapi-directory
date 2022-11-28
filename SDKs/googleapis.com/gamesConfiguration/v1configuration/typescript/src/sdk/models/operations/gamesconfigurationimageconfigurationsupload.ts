import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GamesConfigurationImageConfigurationsUploadImageTypeEnum {
    ImageTypeUnspecified = "IMAGE_TYPE_UNSPECIFIED",
    AchievementIcon = "ACHIEVEMENT_ICON",
    LeaderboardIcon = "LEADERBOARD_ICON"
}


export class GamesConfigurationImageConfigurationsUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: GamesConfigurationImageConfigurationsUploadImageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;
}


export class GamesConfigurationImageConfigurationsUploadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class GamesConfigurationImageConfigurationsUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GamesConfigurationImageConfigurationsUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesConfigurationImageConfigurationsUploadPathParams;

  @SpeakeasyMetadata()
  queryParams: GamesConfigurationImageConfigurationsUploadQueryParams;

  @SpeakeasyMetadata()
  security: GamesConfigurationImageConfigurationsUploadSecurity;
}


export class GamesConfigurationImageConfigurationsUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageConfiguration?: shared.ImageConfiguration;

  @SpeakeasyMetadata()
  statusCode: number;
}
