import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SslConfigTypeEnum {
    SslTypeUnspecified = "SSL_TYPE_UNSPECIFIED",
    ServerOnly = "SERVER_ONLY",
    ServerClient = "SERVER_CLIENT"
}
/**
 * SSL configuration information.
**/
export declare class SslConfig extends SpeakeasyBase {
    caCertificate?: string;
    clientCertificate?: string;
    clientKey?: string;
    type?: SslConfigTypeEnum;
}
/**
 * SSL configuration information.
**/
export declare class SslConfigInput extends SpeakeasyBase {
    caCertificate?: string;
    clientCertificate?: string;
    clientKey?: string;
}
