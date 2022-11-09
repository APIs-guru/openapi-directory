import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SmtpMsaSecurityModeEnum {
    SecurityModeUnspecified = "securityModeUnspecified"
,    None = "none"
,    Ssl = "ssl"
,    Starttls = "starttls"
}


// SmtpMsa
/** 
 * Configuration for communication with an SMTP service.
**/
export class SmtpMsa extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=securityMode" })
  securityMode?: SmtpMsaSecurityModeEnum;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
