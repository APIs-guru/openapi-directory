import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DrivelabelsLabelsListMinimumRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED"
,    Reader = "READER"
,    Applier = "APPLIER"
,    Organizer = "ORGANIZER"
,    Editor = "EDITOR"
}

export enum DrivelabelsLabelsListViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC"
,    LabelViewFull = "LABEL_VIEW_FULL"
}


export class DrivelabelsLabelsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=minimumRole" })
  minimumRole?: DrivelabelsLabelsListMinimumRoleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publishedOnly" })
  publishedOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" })
  useAdminAccess?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: DrivelabelsLabelsListViewEnum;
}


export class DrivelabelsLabelsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DrivelabelsLabelsListQueryParams;
}


export class DrivelabelsLabelsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleAppsDriveLabelsV2betaListLabelsResponse?: shared.GoogleAppsDriveLabelsV2betaListLabelsResponse;

  @Metadata()
  statusCode: number;
}
