import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerSubscriptionsDeletePathParams extends SpeakeasyBase {
    customerId: string;
    subscriptionId: string;
}
export declare enum ResellerSubscriptionsDeleteDeletionTypeEnum {
    DeletionTypeUndefined = "deletion_type_undefined",
    Cancel = "cancel",
    TransferToDirect = "transfer_to_direct"
}
export declare class ResellerSubscriptionsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deletionType: ResellerSubscriptionsDeleteDeletionTypeEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ResellerSubscriptionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerSubscriptionsDeleteRequest extends SpeakeasyBase {
    pathParams: ResellerSubscriptionsDeletePathParams;
    queryParams: ResellerSubscriptionsDeleteQueryParams;
    security: ResellerSubscriptionsDeleteSecurity;
}
export declare class ResellerSubscriptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
