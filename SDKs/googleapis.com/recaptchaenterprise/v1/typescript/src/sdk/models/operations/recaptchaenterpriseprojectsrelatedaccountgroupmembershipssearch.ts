import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest;

  @SpeakeasyMetadata()
  security: RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity;
}


export class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse?: shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
