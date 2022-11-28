import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CloudRunMetadata contains information from a Cloud Run deployment.
**/
export declare class CloudRunMetadata extends SpeakeasyBase {
    revision?: string;
    service?: string;
    serviceUrls?: string[];
}
