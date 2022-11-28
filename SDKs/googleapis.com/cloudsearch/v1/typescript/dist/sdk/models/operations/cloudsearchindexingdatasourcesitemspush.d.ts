import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesItemsPushPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesItemsPushQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesItemsPushSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsPushSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesItemsPushSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsPushSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsPushSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsPushRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesItemsPushPathParams;
    queryParams: CloudsearchIndexingDatasourcesItemsPushQueryParams;
    request?: shared.PushItemRequest;
    security: CloudsearchIndexingDatasourcesItemsPushSecurity;
}
export declare class CloudsearchIndexingDatasourcesItemsPushResponse extends SpeakeasyBase {
    contentType: string;
    item?: shared.Item;
    statusCode: number;
}
