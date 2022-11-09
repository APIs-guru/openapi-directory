import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerTagValuesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class CloudresourcemanagerTagValuesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesPatchRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesPatchPathParams;
    queryParams: CloudresourcemanagerTagValuesPatchQueryParams;
    request?: shared.TagValue;
    security: CloudresourcemanagerTagValuesPatchSecurity;
}
export declare class CloudresourcemanagerTagValuesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
