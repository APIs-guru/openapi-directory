import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudkmsProjectsLocationsGenerateRandomBytesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class CloudkmsProjectsLocationsGenerateRandomBytesQueryParams extends SpeakeasyBase {
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


export class CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsGenerateRandomBytesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2;
}


export class CloudkmsProjectsLocationsGenerateRandomBytesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudkmsProjectsLocationsGenerateRandomBytesPathParams;

  @Metadata()
  queryParams: CloudkmsProjectsLocationsGenerateRandomBytesQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GenerateRandomBytesRequest;

  @Metadata()
  security: CloudkmsProjectsLocationsGenerateRandomBytesSecurity;
}


export class CloudkmsProjectsLocationsGenerateRandomBytesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generateRandomBytesResponse?: shared.GenerateRandomBytesResponse;

  @Metadata()
  statusCode: number;
}
