import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAttributesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    categoryId?: string;
    country?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    name?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAttributesListRequest extends SpeakeasyBase {
    queryParams: MybusinessAttributesListQueryParams;
}
export declare class MybusinessAttributesListResponse extends SpeakeasyBase {
    contentType: string;
    listAttributeMetadataResponse?: shared.ListAttributeMetadataResponse;
    statusCode: number;
}
