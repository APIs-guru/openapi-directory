import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsMediaCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsMediaCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsMediaCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsMediaCreatePathParams;
    queryParams: MybusinessAccountsLocationsMediaCreateQueryParams;
    request?: shared.MediaItem;
}
export declare class MybusinessAccountsLocationsMediaCreateResponse extends SpeakeasyBase {
    contentType: string;
    mediaItem?: shared.MediaItem;
    statusCode: number;
}
