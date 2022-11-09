import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplicapoolReplicasDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=replicaName" })
  replicaName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class ReplicapoolReplicasDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class ReplicapoolReplicasDeleteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolReplicasDeleteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolReplicasDeleteSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolReplicasDeleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ReplicapoolReplicasDeleteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ReplicapoolReplicasDeleteSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: ReplicapoolReplicasDeleteSecurityOption3;
}


export class ReplicapoolReplicasDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplicapoolReplicasDeletePathParams;

  @Metadata()
  queryParams: ReplicapoolReplicasDeleteQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ReplicasDeleteRequest;

  @Metadata()
  security: ReplicapoolReplicasDeleteSecurity;
}


export class ReplicapoolReplicasDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
