import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LinkApplicationProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}


export class LinkApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: LinkApplicationProviderEnum;
}


export class LinkApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: string;
}


export class LinkApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class LinkApplication403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class LinkApplication409ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class LinkApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LinkApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: LinkApplicationRequestBody;

  @SpeakeasyMetadata()
  security: LinkApplicationSecurity;
}


export class LinkApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  accountResponse?: shared.AccountResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linkApplication403ApplicationJsonObject?: LinkApplication403ApplicationJson;

  @SpeakeasyMetadata()
  linkApplication409ApplicationJsonObject?: LinkApplication409ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
