import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChatSpacesListRequest extends SpeakeasyBase {
    queryParams: ChatSpacesListQueryParams;
}
export declare class ChatSpacesListResponse extends SpeakeasyBase {
    contentType: string;
    listSpacesResponse?: shared.ListSpacesResponse;
    statusCode: number;
}
