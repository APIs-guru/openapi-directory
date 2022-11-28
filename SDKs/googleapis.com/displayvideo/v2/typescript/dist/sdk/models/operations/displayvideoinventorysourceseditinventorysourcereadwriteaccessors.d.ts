import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsPathParams extends SpeakeasyBase {
    inventorySourceId: string;
}
export declare class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsPathParams;
    queryParams: DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsQueryParams;
    request?: shared.EditInventorySourceReadWriteAccessorsRequest;
    security: DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity;
}
export declare class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse extends SpeakeasyBase {
    contentType: string;
    inventorySourceAccessors?: shared.InventorySourceAccessors;
    statusCode: number;
}
