import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesCampaignsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesCampaignsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesCampaignsIdJsonPathParams;
}
export declare class GetResourcesCampaignsIdJsonResponse extends SpeakeasyBase {
    campaignWrapped?: shared.CampaignWrapped;
    contentType: string;
    statusCode: number;
}
