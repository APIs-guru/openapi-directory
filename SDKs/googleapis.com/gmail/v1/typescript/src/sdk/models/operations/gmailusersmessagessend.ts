import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GmailUsersMessagesSendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GmailUsersMessagesSendQueryParams extends SpeakeasyBase {
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


export class GmailUsersMessagesSendRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=message/cpim" })
  messageCpim: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/delivery-status" })
  messageDeliveryStatus: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/disposition-notification" })
  messageDispositionNotification: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/external-body" })
  messageExternalBody: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/feedback-report" })
  messageFeedbackReport: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/global" })
  messageGlobal: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/global-delivery-status" })
  messageGlobalDeliveryStatus: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/global-disposition-notification" })
  messageGlobalDispositionNotification: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/global-headers" })
  messageGlobalHeaders: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/http" })
  messageHttp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/imdn+xml" })
  messageImdnPlusXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/news" })
  messageNews: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/partial" })
  messagePartial: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/rfc822" })
  messageRfc822: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/s-http" })
  messageShttp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/sip" })
  messageSip: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/sipfrag" })
  messageSipfrag: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/tracking-status" })
  messageTrackingStatus: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/vnd.si.simp" })
  messageVndSiSimp: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=message/vnd.wfa.wsc" })
  messageVndWfaWsc: Uint8Array;
}


export class GmailUsersMessagesSendSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersMessagesSendSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersMessagesSendSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersMessagesSendSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersMessagesSendSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GmailUsersMessagesSendSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: GmailUsersMessagesSendSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: GmailUsersMessagesSendSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: GmailUsersMessagesSendSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: GmailUsersMessagesSendSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: GmailUsersMessagesSendSecurityOption5;
}


export class GmailUsersMessagesSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GmailUsersMessagesSendPathParams;

  @SpeakeasyMetadata()
  queryParams: GmailUsersMessagesSendQueryParams;

  @SpeakeasyMetadata()
  request?: GmailUsersMessagesSendRequests;

  @SpeakeasyMetadata()
  security: GmailUsersMessagesSendSecurity;
}


export class GmailUsersMessagesSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  message?: shared.Message;

  @SpeakeasyMetadata()
  statusCode: number;
}
