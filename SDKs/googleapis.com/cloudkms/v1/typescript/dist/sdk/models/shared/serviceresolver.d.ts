import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Certificate } from "./certificate";
/**
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
**/
export declare class ServiceResolver extends SpeakeasyBase {
    endpointFilter?: string;
    hostname?: string;
    serverCertificates?: Certificate[];
    serviceDirectoryService?: string;
}
