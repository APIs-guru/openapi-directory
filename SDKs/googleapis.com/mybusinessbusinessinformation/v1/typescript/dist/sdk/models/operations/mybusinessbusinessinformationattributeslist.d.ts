import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationAttributesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    categoryName?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    showAll?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessbusinessinformationAttributesListRequest extends SpeakeasyBase {
    queryParams: MybusinessbusinessinformationAttributesListQueryParams;
}
export declare class MybusinessbusinessinformationAttributesListResponse extends SpeakeasyBase {
    contentType: string;
    listAttributeMetadataResponse?: shared.ListAttributeMetadataResponse;
    statusCode: number;
}
