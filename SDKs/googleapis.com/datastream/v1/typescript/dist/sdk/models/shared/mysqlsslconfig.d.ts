import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MySQL SSL configuration information.
**/
export declare class MysqlSslConfig extends SpeakeasyBase {
    caCertificate?: string;
    caCertificateSet?: boolean;
    clientCertificate?: string;
    clientCertificateSet?: boolean;
    clientKey?: string;
    clientKeySet?: boolean;
}
/**
 * MySQL SSL configuration information.
**/
export declare class MysqlSslConfigInput extends SpeakeasyBase {
    caCertificate?: string;
    clientCertificate?: string;
    clientKey?: string;
}
