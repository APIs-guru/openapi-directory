import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingInventoryItemsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
    projectId: string;
}
export declare class DfareportingInventoryItemsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingInventoryItemsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingInventoryItemsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingInventoryItemsGetPathParams;
    queryParams: DfareportingInventoryItemsGetQueryParams;
    security: DfareportingInventoryItemsGetSecurity;
}
export declare class DfareportingInventoryItemsGetResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
}
