import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllocateIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AllocateIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AllocateIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AllocateIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AllocateIpSecurityOption2;
}


export class AllocateIpRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: AllocateIpSecurity;
}


export class AllocateIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AllocateIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;

  @Metadata()
  allocateIpDefaultApplicationJsonObject?: AllocateIpDefaultApplicationJson;
}
