import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    Desktop = "desktop",
    Mobile = "mobile"
}
export declare class PagespeedonlinePagespeedapiRunpagespeedQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    filterThirdPartyResources?: boolean;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rule?: string[];
    screenshot?: boolean;
    strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
    url: string;
    userIp?: string;
}
export declare class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
    queryParams: PagespeedonlinePagespeedapiRunpagespeedQueryParams;
}
export declare class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
