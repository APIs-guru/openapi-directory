import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StorageObjectsComposePathParams extends SpeakeasyBase {
    destinationBucket: string;
    destinationObject: string;
}
export declare class StorageObjectsComposeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    ifGenerationMatch?: string;
    ifMetagenerationMatch?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class StorageObjectsComposeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsComposeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StorageObjectsComposeSecurity extends SpeakeasyBase {
    option1?: StorageObjectsComposeSecurityOption1;
    option2?: StorageObjectsComposeSecurityOption2;
}
export declare class StorageObjectsComposeRequest extends SpeakeasyBase {
    pathParams: StorageObjectsComposePathParams;
    queryParams: StorageObjectsComposeQueryParams;
    request?: shared.ComposeRequest;
    security: StorageObjectsComposeSecurity;
}
export declare class StorageObjectsComposeResponse extends SpeakeasyBase {
    contentType: string;
    object?: shared.Object;
    statusCode: number;
}
