import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsAllocateIdsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsAllocateIdsQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsAllocateIdsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsAllocateIdsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsAllocateIdsSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsAllocateIdsSecurityOption1;
    option2?: DatastoreProjectsAllocateIdsSecurityOption2;
}
export declare class DatastoreProjectsAllocateIdsRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsAllocateIdsPathParams;
    queryParams: DatastoreProjectsAllocateIdsQueryParams;
    request?: shared.AllocateIdsRequest;
    security: DatastoreProjectsAllocateIdsSecurity;
}
export declare class DatastoreProjectsAllocateIdsResponse extends SpeakeasyBase {
    allocateIdsResponse?: shared.AllocateIdsResponse;
    contentType: string;
    statusCode: number;
}
