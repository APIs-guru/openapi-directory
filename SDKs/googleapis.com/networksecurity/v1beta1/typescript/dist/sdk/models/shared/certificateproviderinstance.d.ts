import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.
**/
export declare class CertificateProviderInstance extends SpeakeasyBase {
    pluginInstance?: string;
}
