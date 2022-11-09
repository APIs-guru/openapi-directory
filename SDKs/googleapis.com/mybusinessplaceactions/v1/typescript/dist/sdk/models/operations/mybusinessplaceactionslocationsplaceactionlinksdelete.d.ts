import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessplaceactionsLocationsPlaceActionLinksDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessplaceactionsLocationsPlaceActionLinksDeletePathParams;
    queryParams: MybusinessplaceactionsLocationsPlaceActionLinksDeleteQueryParams;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
