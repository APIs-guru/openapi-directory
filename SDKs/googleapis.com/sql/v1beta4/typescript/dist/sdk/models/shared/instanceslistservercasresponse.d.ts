import { SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";
/**
 * Instances ListServerCas response.
**/
export declare class InstancesListServerCasResponse extends SpeakeasyBase {
    activeVersion?: string;
    certs?: SslCert[];
    kind?: string;
}
