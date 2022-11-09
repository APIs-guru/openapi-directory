import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DrivelabelsUsersGetCapabilitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum DrivelabelsUsersGetCapabilitiesViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC"
,    LabelViewFull = "LABEL_VIEW_FULL"
}


export class DrivelabelsUsersGetCapabilitiesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" })
  useAdminAccess?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: DrivelabelsUsersGetCapabilitiesViewEnum;
}


export class DrivelabelsUsersGetCapabilitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DrivelabelsUsersGetCapabilitiesPathParams;

  @Metadata()
  queryParams: DrivelabelsUsersGetCapabilitiesQueryParams;
}


export class DrivelabelsUsersGetCapabilitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleAppsDriveLabelsV2betaUserCapabilities?: shared.GoogleAppsDriveLabelsV2betaUserCapabilities;

  @Metadata()
  statusCode: number;
}
