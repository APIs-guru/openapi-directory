import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MybusinessverificationsLocationsFetchVerificationOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location" })
  location: string;
}


export class MybusinessverificationsLocationsFetchVerificationOptionsQueryParams extends SpeakeasyBase {
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


export class MybusinessverificationsLocationsFetchVerificationOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MybusinessverificationsLocationsFetchVerificationOptionsPathParams;

  @Metadata()
  queryParams: MybusinessverificationsLocationsFetchVerificationOptionsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FetchVerificationOptionsRequest;
}


export class MybusinessverificationsLocationsFetchVerificationOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fetchVerificationOptionsResponse?: shared.FetchVerificationOptionsResponse;

  @Metadata()
  statusCode: number;
}
