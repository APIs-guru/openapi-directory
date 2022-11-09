import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePluginSecurityInfoRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  pluginSecurityInfo?: shared.PluginSecurityInfo;

  @Metadata({ data: "request, media_type=application/json" })
  pluginSecurityInfo1?: shared.PluginSecurityInfo;

  @Metadata({ data: "request, media_type=text/json" })
  pluginSecurityInfo2?: shared.PluginSecurityInfo;
}


export class UpdatePluginSecurityInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdatePluginSecurityInfoRequest extends SpeakeasyBase {
  @Metadata()
  request: UpdatePluginSecurityInfoRequests;

  @Metadata()
  security: UpdatePluginSecurityInfoSecurity;
}


export class UpdatePluginSecurityInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
