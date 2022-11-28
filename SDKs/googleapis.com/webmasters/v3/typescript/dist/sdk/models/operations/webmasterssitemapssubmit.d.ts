import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebmastersSitemapsSubmitPathParams extends SpeakeasyBase {
    feedpath: string;
    siteUrl: string;
}
export declare class WebmastersSitemapsSubmitQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class WebmastersSitemapsSubmitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebmastersSitemapsSubmitRequest extends SpeakeasyBase {
    pathParams: WebmastersSitemapsSubmitPathParams;
    queryParams: WebmastersSitemapsSubmitQueryParams;
    security: WebmastersSitemapsSubmitSecurity;
}
export declare class WebmastersSitemapsSubmitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
