import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1DashboardClient } from "./googlecloudservicebrokerv1alpha1dashboardclient";
import { GoogleCloudServicebrokerV1alpha1Plan } from "./googlecloudservicebrokerv1alpha1plan";
/**
 * The resource model mostly follows the Open Service Broker API, as
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
**/
export declare class GoogleCloudServicebrokerV1alpha1Service extends SpeakeasyBase {
    bindable?: boolean;
    bindingRetrievable?: boolean;
    dashboardClient?: GoogleCloudServicebrokerV1alpha1DashboardClient;
    description?: string;
    id?: string;
    instanceRetrievable?: boolean;
    metadata?: Map<string, any>;
    name?: string;
    planUpdateable?: boolean;
    plans?: GoogleCloudServicebrokerV1alpha1Plan[];
    tags?: string[];
}
