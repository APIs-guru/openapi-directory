import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LinkApplicationProviderEnum {
    Messenger = "messenger"
,    ViberServiceMsg = "viber_service_msg"
,    Whatsapp = "whatsapp"
}


export class LinkApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: LinkApplicationProviderEnum;
}


export class LinkApplicationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: string;
}


export class LinkApplicationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class LinkApplicationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class LinkApplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: LinkApplicationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: LinkApplicationSecurityOption2;
}


export class LinkApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LinkApplicationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: LinkApplicationRequestBody;

  @Metadata()
  security: LinkApplicationSecurity;
}


export class LinkApplication403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class LinkApplication409ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class LinkApplicationResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  accountResponse?: shared.AccountResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  linkApplication403ApplicationJsonObject?: LinkApplication403ApplicationJson;

  @Metadata()
  linkApplication409ApplicationJsonObject?: LinkApplication409ApplicationJson;

  @Metadata()
  statusCode: number;
}
