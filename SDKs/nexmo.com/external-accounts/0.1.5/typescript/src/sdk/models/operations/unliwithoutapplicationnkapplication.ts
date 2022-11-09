import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UnliWithoutApplicationnkApplicationProviderEnum {
    Messenger = "messenger"
,    ViberServiceMsg = "viber_service_msg"
,    Whatsapp = "whatsapp"
}


export class UnliWithoutApplicationnkApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=external_id" })
  externalId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: UnliWithoutApplicationnkApplicationProviderEnum;
}


export class UnliWithoutApplicationnkApplicationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UnliWithoutApplicationnkApplicationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UnliWithoutApplicationnkApplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UnliWithoutApplicationnkApplicationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UnliWithoutApplicationnkApplicationSecurityOption2;
}


export class UnliWithoutApplicationnkApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnliWithoutApplicationnkApplicationPathParams;

  @Metadata()
  security: UnliWithoutApplicationnkApplicationSecurity;
}


export class UnliWithoutApplicationnkApplication403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UnliWithoutApplicationnkApplication409ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UnliWithoutApplicationnkApplicationResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unliWithoutApplicationnkApplication403ApplicationJsonObject?: UnliWithoutApplicationnkApplication403ApplicationJson;

  @Metadata()
  unliWithoutApplicationnkApplication409ApplicationJsonObject?: UnliWithoutApplicationnkApplication409ApplicationJson;
}
