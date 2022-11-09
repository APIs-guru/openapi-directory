import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GmailUsersDraftsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GmailUsersDraftsUpdateQueryParams extends SpeakeasyBase {
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


export class GmailUsersDraftsUpdateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=message/cpim" })
  messageCpim: Uint8Array;

  @Metadata({ data: "request, media_type=message/delivery-status" })
  messageDeliveryStatus: Uint8Array;

  @Metadata({ data: "request, media_type=message/disposition-notification" })
  messageDispositionNotification: Uint8Array;

  @Metadata({ data: "request, media_type=message/external-body" })
  messageExternalBody: Uint8Array;

  @Metadata({ data: "request, media_type=message/feedback-report" })
  messageFeedbackReport: Uint8Array;

  @Metadata({ data: "request, media_type=message/global" })
  messageGlobal: Uint8Array;

  @Metadata({ data: "request, media_type=message/global-delivery-status" })
  messageGlobalDeliveryStatus: Uint8Array;

  @Metadata({ data: "request, media_type=message/global-disposition-notification" })
  messageGlobalDispositionNotification: Uint8Array;

  @Metadata({ data: "request, media_type=message/global-headers" })
  messageGlobalHeaders: Uint8Array;

  @Metadata({ data: "request, media_type=message/http" })
  messageHttp: Uint8Array;

  @Metadata({ data: "request, media_type=message/imdn+xml" })
  messageImdnPlusXml: Uint8Array;

  @Metadata({ data: "request, media_type=message/news" })
  messageNews: Uint8Array;

  @Metadata({ data: "request, media_type=message/partial" })
  messagePartial: Uint8Array;

  @Metadata({ data: "request, media_type=message/rfc822" })
  messageRfc822: Uint8Array;

  @Metadata({ data: "request, media_type=message/s-http" })
  messageShttp: Uint8Array;

  @Metadata({ data: "request, media_type=message/sip" })
  messageSip: Uint8Array;

  @Metadata({ data: "request, media_type=message/sipfrag" })
  messageSipfrag: Uint8Array;

  @Metadata({ data: "request, media_type=message/tracking-status" })
  messageTrackingStatus: Uint8Array;

  @Metadata({ data: "request, media_type=message/vnd.si.simp" })
  messageVndSiSimp: Uint8Array;

  @Metadata({ data: "request, media_type=message/vnd.wfa.wsc" })
  messageVndWfaWsc: Uint8Array;
}


export class GmailUsersDraftsUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersDraftsUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersDraftsUpdateSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersDraftsUpdateSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersDraftsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GmailUsersDraftsUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GmailUsersDraftsUpdateSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GmailUsersDraftsUpdateSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: GmailUsersDraftsUpdateSecurityOption4;
}


export class GmailUsersDraftsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GmailUsersDraftsUpdatePathParams;

  @Metadata()
  queryParams: GmailUsersDraftsUpdateQueryParams;

  @Metadata()
  request?: GmailUsersDraftsUpdateRequests;

  @Metadata()
  security: GmailUsersDraftsUpdateSecurity;
}


export class GmailUsersDraftsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  draft?: shared.Draft;

  @Metadata()
  statusCode: number;
}
