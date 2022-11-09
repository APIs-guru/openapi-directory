import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" })
  emailAddress: string;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams;

  @Metadata()
  security: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity;
}


export class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  publicSubscriptionStatusesResponse?: shared.PublicSubscriptionStatusesResponse;

  @Metadata()
  statusCode: number;
}
