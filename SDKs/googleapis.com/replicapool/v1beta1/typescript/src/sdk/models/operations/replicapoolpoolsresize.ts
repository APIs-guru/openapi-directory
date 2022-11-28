import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplicapoolPoolsResizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class ReplicapoolPoolsResizeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numReplicas" })
  numReplicas?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class ReplicapoolPoolsResizeSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolPoolsResizeSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolPoolsResizeSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolPoolsResizeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ReplicapoolPoolsResizeSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ReplicapoolPoolsResizeSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: ReplicapoolPoolsResizeSecurityOption3;
}


export class ReplicapoolPoolsResizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplicapoolPoolsResizePathParams;

  @SpeakeasyMetadata()
  queryParams: ReplicapoolPoolsResizeQueryParams;

  @SpeakeasyMetadata()
  security: ReplicapoolPoolsResizeSecurity;
}


export class ReplicapoolPoolsResizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
