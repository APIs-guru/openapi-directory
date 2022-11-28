import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessplaceactionsPlaceActionTypeMetadataListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessplaceactionsPlaceActionTypeMetadataListRequest extends SpeakeasyBase {
    queryParams: MybusinessplaceactionsPlaceActionTypeMetadataListQueryParams;
}
export declare class MybusinessplaceactionsPlaceActionTypeMetadataListResponse extends SpeakeasyBase {
    contentType: string;
    listPlaceActionTypeMetadataResponse?: shared.ListPlaceActionTypeMetadataResponse;
    statusCode: number;
}
