import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagmanagerAccountsContainersVersionsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=containerId" })
  containerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=containerVersionId" })
  containerVersionId: string;
}


export class TagmanagerAccountsContainersVersionsUpdateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=fingerprint" })
  fingerprint?: string;

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


export class TagmanagerAccountsContainersVersionsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersVersionsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagmanagerAccountsContainersVersionsUpdatePathParams;

  @Metadata()
  queryParams: TagmanagerAccountsContainersVersionsUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ContainerVersion;

  @Metadata()
  security: TagmanagerAccountsContainersVersionsUpdateSecurity;
}


export class TagmanagerAccountsContainersVersionsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  containerVersion?: shared.ContainerVersion;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
