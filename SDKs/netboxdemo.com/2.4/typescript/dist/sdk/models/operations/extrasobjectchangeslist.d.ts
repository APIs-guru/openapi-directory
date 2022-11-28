import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasObjectChangesListQueryParams extends SpeakeasyBase {
    action?: string;
    changedObjectType?: string;
    limit?: number;
    objectRepr?: string;
    offset?: number;
    q?: string;
    requestId?: string;
    time?: string;
    user?: string;
    userName?: string;
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
