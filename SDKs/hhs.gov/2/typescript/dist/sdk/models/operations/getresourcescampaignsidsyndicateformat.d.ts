import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesCampaignsIdSyndicateFormatPathParams extends SpeakeasyBase {
    format: string;
    id: number;
}
export declare class GetResourcesCampaignsIdSyndicateFormatQueryParams extends SpeakeasyBase {
    displayMethod?: string;
}
export declare class GetResourcesCampaignsIdSyndicateFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesCampaignsIdSyndicateFormatPathParams;
    queryParams: GetResourcesCampaignsIdSyndicateFormatQueryParams;
}
export declare class GetResourcesCampaignsIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
