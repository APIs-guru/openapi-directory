import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SmtpMsaSecurityModeEnum {
    SecurityModeUnspecified = "securityModeUnspecified",
    None = "none",
    Ssl = "ssl",
    Starttls = "starttls"
}
/**
 * Configuration for communication with an SMTP service.
**/
export declare class SmtpMsa extends SpeakeasyBase {
    host?: string;
    password?: string;
    port?: number;
    securityMode?: SmtpMsaSecurityModeEnum;
    username?: string;
}
