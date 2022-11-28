import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplicapoolPoolsUpdatetemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class ReplicapoolPoolsUpdatetemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class ReplicapoolPoolsUpdatetemplateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolPoolsUpdatetemplateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolPoolsUpdatetemplateSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ReplicapoolPoolsUpdatetemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ReplicapoolPoolsUpdatetemplateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ReplicapoolPoolsUpdatetemplateSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: ReplicapoolPoolsUpdatetemplateSecurityOption3;
}


export class ReplicapoolPoolsUpdatetemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplicapoolPoolsUpdatetemplatePathParams;

  @SpeakeasyMetadata()
  queryParams: ReplicapoolPoolsUpdatetemplateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Template;

  @SpeakeasyMetadata()
  security: ReplicapoolPoolsUpdatetemplateSecurity;
}


export class ReplicapoolPoolsUpdatetemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
