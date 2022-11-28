import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BigtableadminProjectsInstancesClustersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class BigtableadminProjectsInstancesClustersListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurityOption7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigtableadminProjectsInstancesClustersListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: BigtableadminProjectsInstancesClustersListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: BigtableadminProjectsInstancesClustersListSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: BigtableadminProjectsInstancesClustersListSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: BigtableadminProjectsInstancesClustersListSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: BigtableadminProjectsInstancesClustersListSecurityOption5;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option6?: BigtableadminProjectsInstancesClustersListSecurityOption6;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option7?: BigtableadminProjectsInstancesClustersListSecurityOption7;
}


export class BigtableadminProjectsInstancesClustersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BigtableadminProjectsInstancesClustersListPathParams;

  @SpeakeasyMetadata()
  queryParams: BigtableadminProjectsInstancesClustersListQueryParams;

  @SpeakeasyMetadata()
  security: BigtableadminProjectsInstancesClustersListSecurity;
}


export class BigtableadminProjectsInstancesClustersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listClustersResponse?: shared.ListClustersResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
