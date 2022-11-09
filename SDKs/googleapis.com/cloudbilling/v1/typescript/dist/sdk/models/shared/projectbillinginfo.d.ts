import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects).
**/
export declare class ProjectBillingInfo extends SpeakeasyBase {
    billingAccountName?: string;
    billingEnabled?: boolean;
    name?: string;
    projectId?: string;
}
