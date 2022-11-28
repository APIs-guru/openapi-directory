import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsMediaStartUploadPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsMediaStartUploadQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsMediaStartUploadRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsMediaStartUploadPathParams;
    queryParams: MybusinessAccountsLocationsMediaStartUploadQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessAccountsLocationsMediaStartUploadResponse extends SpeakeasyBase {
    contentType: string;
    mediaItemDataRef?: shared.MediaItemDataRef;
    statusCode: number;
}
