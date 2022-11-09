import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;
}


export class DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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


export class DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams;

  @Metadata()
  queryParams: DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BulkEditAdvertiserAssignedTargetingOptionsRequest;

  @Metadata()
  security: DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity;
}


export class DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  bulkEditAdvertiserAssignedTargetingOptionsResponse?: shared.BulkEditAdvertiserAssignedTargetingOptionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
