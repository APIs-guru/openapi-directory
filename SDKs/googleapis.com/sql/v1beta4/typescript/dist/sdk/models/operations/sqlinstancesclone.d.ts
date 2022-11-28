import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesClonePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesCloneQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesCloneSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesCloneSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesCloneSecurity extends SpeakeasyBase {
    option1?: SqlInstancesCloneSecurityOption1;
    option2?: SqlInstancesCloneSecurityOption2;
}
export declare class SqlInstancesCloneRequest extends SpeakeasyBase {
    pathParams: SqlInstancesClonePathParams;
    queryParams: SqlInstancesCloneQueryParams;
    request?: shared.InstancesCloneRequest;
    security: SqlInstancesCloneSecurity;
}
export declare class SqlInstancesCloneResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
