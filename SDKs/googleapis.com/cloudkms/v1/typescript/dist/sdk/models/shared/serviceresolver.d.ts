import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { CertificateInput } from "./certificate";
/**
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
export declare class ServiceResolver extends SpeakeasyBase {
    endpointFilter?: string;
    hostname?: string;
    serverCertificates?: Certificate[];
    serviceDirectoryService?: string;
}
/**
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
export declare class ServiceResolverInput extends SpeakeasyBase {
    endpointFilter?: string;
    hostname?: string;
    serverCertificates?: CertificateInput[];
    serviceDirectoryService?: string;
}
