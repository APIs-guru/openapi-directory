import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UnliWithoutApplicationnkApplicationProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}


export class UnliWithoutApplicationnkApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: UnliWithoutApplicationnkApplicationProviderEnum;
}


export class UnliWithoutApplicationnkApplicationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class UnliWithoutApplicationnkApplication403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UnliWithoutApplicationnkApplication409ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UnliWithoutApplicationnkApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnliWithoutApplicationnkApplicationPathParams;

  @SpeakeasyMetadata()
  security: UnliWithoutApplicationnkApplicationSecurity;
}


export class UnliWithoutApplicationnkApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unliWithoutApplicationnkApplication403ApplicationJsonObject?: UnliWithoutApplicationnkApplication403ApplicationJson;

  @SpeakeasyMetadata()
  unliWithoutApplicationnkApplication409ApplicationJsonObject?: UnliWithoutApplicationnkApplication409ApplicationJson;
}
