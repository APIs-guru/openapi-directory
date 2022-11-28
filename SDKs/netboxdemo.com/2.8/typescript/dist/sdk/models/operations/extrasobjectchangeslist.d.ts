import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasObjectChangesListQueryParams extends SpeakeasyBase {
    action?: string;
    actionN?: string;
    changedObjectId?: string;
    changedObjectIdGt?: string;
    changedObjectIdGte?: string;
    changedObjectIdLt?: string;
    changedObjectIdLte?: string;
    changedObjectIdN?: string;
    changedObjectType?: string;
    changedObjectTypeN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    objectRepr?: string;
    objectReprIc?: string;
    objectReprIe?: string;
    objectReprIew?: string;
    objectReprIsw?: string;
    objectReprN?: string;
    objectReprNic?: string;
    objectReprNie?: string;
    objectReprNiew?: string;
    objectReprNisw?: string;
    offset?: number;
    q?: string;
    requestId?: string;
    time?: string;
    user?: string;
    userN?: string;
    userName?: string;
    userNameIc?: string;
    userNameIe?: string;
    userNameIew?: string;
    userNameIsw?: string;
    userNameN?: string;
    userNameNic?: string;
    userNameNie?: string;
    userNameNiew?: string;
    userNameNisw?: string;
}
export declare class ExtrasObjectChangesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ObjectChange[];
}
export declare class ExtrasObjectChangesListRequest extends SpeakeasyBase {
    queryParams: ExtrasObjectChangesListQueryParams;
}
export declare class ExtrasObjectChangesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasObjectChangesList200ApplicationJsonObject?: ExtrasObjectChangesList200ApplicationJson;
}
