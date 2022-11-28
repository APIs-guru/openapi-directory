import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1CustomersIdPrivacyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CustomersIdPrivacyRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CustomersIdPrivacyPathParams;
}
export declare class GetSetupV1CustomersIdPrivacyResponse extends SpeakeasyBase {
    contentType: string;
    customerPrivacyViewModel?: Map<string, any>;
    statusCode: number;
}
