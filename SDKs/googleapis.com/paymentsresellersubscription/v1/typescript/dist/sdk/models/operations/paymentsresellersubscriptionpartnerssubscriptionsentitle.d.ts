import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsEntitlePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsEntitleQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsEntitlePathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsEntitleQueryParams;
    request?: Map<string, any>;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse;
    statusCode: number;
}
