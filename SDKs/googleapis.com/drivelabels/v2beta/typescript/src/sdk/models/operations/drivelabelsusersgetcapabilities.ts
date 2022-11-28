import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrivelabelsUsersGetCapabilitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum DrivelabelsUsersGetCapabilitiesViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}


export class DrivelabelsUsersGetCapabilitiesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" })
  useAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: DrivelabelsUsersGetCapabilitiesViewEnum;
}


export class DrivelabelsUsersGetCapabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DrivelabelsUsersGetCapabilitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: DrivelabelsUsersGetCapabilitiesQueryParams;
}


export class DrivelabelsUsersGetCapabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleAppsDriveLabelsV2betaUserCapabilities?: shared.GoogleAppsDriveLabelsV2betaUserCapabilities;

  @SpeakeasyMetadata()
  statusCode: number;
}
