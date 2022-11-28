import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutRealmUsersIdExecuteActionsEmailPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmUsersIdExecuteActionsEmailQueryParams extends SpeakeasyBase {
    clientId?: string;
    lifespan?: number;
    redirectUri?: string;
}
export declare class PutRealmUsersIdExecuteActionsEmailRequest extends SpeakeasyBase {
    pathParams: PutRealmUsersIdExecuteActionsEmailPathParams;
    queryParams: PutRealmUsersIdExecuteActionsEmailQueryParams;
    request: string[];
}
export declare class PutRealmUsersIdExecuteActionsEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
