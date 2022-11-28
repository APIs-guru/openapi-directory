import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertDetail } from "./sslcertdetail";
import { Operation } from "./operation";
import { SslCert } from "./sslcert";
/**
 * SslCert insert response.
**/
export declare class SslCertsInsertResponse extends SpeakeasyBase {
    clientCert?: SslCertDetail;
    kind?: string;
    operation?: Operation;
    serverCaCert?: SslCert;
}
