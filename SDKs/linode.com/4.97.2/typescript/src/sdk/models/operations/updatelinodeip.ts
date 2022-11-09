import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLinodeIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateLinodeIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateLinodeIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateLinodeIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateLinodeIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateLinodeIpSecurityOption2;
}


export class UpdateLinodeIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLinodeIpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.IpAddress;

  @Metadata()
  security: UpdateLinodeIpSecurity;
}


export class UpdateLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLinodeIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLinodeIpDefaultApplicationJsonObject?: UpdateLinodeIpDefaultApplicationJson;
}
