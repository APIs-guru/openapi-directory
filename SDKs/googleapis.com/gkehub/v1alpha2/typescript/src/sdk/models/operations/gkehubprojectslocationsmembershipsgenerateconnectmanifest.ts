import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=imagePullSecretContent" })
  imagePullSecretContent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isUpgrade" })
  isUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=namespace" })
  namespace?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy" })
  proxy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=registry" })
  registry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams;

  @Metadata()
  queryParams: GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams;

  @Metadata()
  security: GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity;
}


export class GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generateConnectManifestResponse?: shared.GenerateConnectManifestResponse;

  @Metadata()
  statusCode: number;
}
