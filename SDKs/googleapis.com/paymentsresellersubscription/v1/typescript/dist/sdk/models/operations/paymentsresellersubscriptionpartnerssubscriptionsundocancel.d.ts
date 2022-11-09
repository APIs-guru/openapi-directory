import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelPathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelQueryParams;
    request?: Map<string, any>;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse;
    statusCode: number;
}
