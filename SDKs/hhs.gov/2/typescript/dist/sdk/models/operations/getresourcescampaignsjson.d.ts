import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesCampaignsJsonQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesCampaignsJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesCampaignsJsonQueryParams;
}
export declare class GetResourcesCampaignsJsonResponse extends SpeakeasyBase {
    campaignWrapped?: shared.CampaignWrapped;
    contentType: string;
    statusCode: number;
}
