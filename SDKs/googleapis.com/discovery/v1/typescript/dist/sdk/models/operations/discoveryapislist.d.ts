import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryApisListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    preferred?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DiscoveryApisListRequest extends SpeakeasyBase {
    queryParams: DiscoveryApisListQueryParams;
}
export declare class DiscoveryApisListResponse extends SpeakeasyBase {
    contentType: string;
    directoryList?: shared.DirectoryList;
    statusCode: number;
}
