import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsUploadPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsUploadQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesItemsUploadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsUploadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsUploadSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsUploadSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsUploadSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsUploadRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsUploadPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsUploadQueryParams;
    request?: shared.StartUploadItemRequest;
    security: CloudsearchIndexingDatasourcesItemsUploadSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadItemRef?: shared.UploadItemRef;
}
