import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutLkeClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class PutLkeClusterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PutLkeClusterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PutLkeClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutLkeClusterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutLkeClusterSecurityOption2;
}


export class PutLkeClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutLkeClusterPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PutLkeClusterSecurity;
}


export class PutLkeClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  putLkeCluster200ApplicationJsonAny?: any;
}
