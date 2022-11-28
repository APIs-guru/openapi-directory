import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    email?: string;
    firstName?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    isAdmin?: boolean;
    isLocked?: boolean;
    lastName?: string;
    limit?: number;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetUsersSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class GetUsers200ApplicationJsonOutput extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.UserOutput[];
    url?: string;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
    security: GetUsersSecurity;
}
export declare class GetUsersResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUsers200ApplicationJsonObject?: GetUsers200ApplicationJsonOutput;
}
