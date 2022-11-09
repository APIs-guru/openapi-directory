import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesCampaignsIdMediaJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesCampaignsIdMediaJsonQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesCampaignsIdMediaJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesCampaignsIdMediaJsonPathParams;
    queryParams: GetResourcesCampaignsIdMediaJsonQueryParams;
}
export declare class GetResourcesCampaignsIdMediaJsonResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemWrapped?: shared.MediaItemWrapped;
    statusCode: number;
}
