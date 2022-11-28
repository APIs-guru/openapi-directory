import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SmtpMsaSecurityModeEnum {
    SecurityModeUnspecified = "securityModeUnspecified",
    None = "none",
    Ssl = "ssl",
    Starttls = "starttls"
}


// SmtpMsa
/** 
 * Configuration for communication with an SMTP service.
**/
export class SmtpMsa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=securityMode" })
  securityMode?: SmtpMsaSecurityModeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
