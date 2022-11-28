import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1DashboardClient } from "./googlecloudservicebrokerv1beta1dashboardclient";
import { GoogleCloudServicebrokerV1beta1Plan } from "./googlecloudservicebrokerv1beta1plan";
/**
 * The resource model mostly follows the Open Service Broker API, as
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
**/
export declare class GoogleCloudServicebrokerV1beta1Service extends SpeakeasyBase {
    bindable?: boolean;
    bindingRetrievable?: boolean;
    bindingsRetrievable?: boolean;
    dashboardClient?: GoogleCloudServicebrokerV1beta1DashboardClient;
    description?: string;
    id?: string;
    instancesRetrievable?: boolean;
    metadata?: Map<string, any>;
    name?: string;
    planUpdateable?: boolean;
    plans?: GoogleCloudServicebrokerV1beta1Plan[];
    tags?: string[];
}
