import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePluginSecurityInfoRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  pluginSecurityInfo?: shared.PluginSecurityInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  pluginSecurityInfo1?: shared.PluginSecurityInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  pluginSecurityInfo2?: shared.PluginSecurityInfo;
}


export class UpdatePluginSecurityInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdatePluginSecurityInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: UpdatePluginSecurityInfoRequests;

  @SpeakeasyMetadata()
  security: UpdatePluginSecurityInfoSecurity;
}


export class UpdatePluginSecurityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
