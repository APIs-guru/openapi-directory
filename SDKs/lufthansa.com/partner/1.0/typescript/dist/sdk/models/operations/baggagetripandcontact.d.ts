import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaggageTripAndContactPathParams extends SpeakeasyBase {
    searchId: string;
}
export declare class BaggageTripAndContactHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class BaggageTripAndContactSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class BaggageTripAndContactRequest extends SpeakeasyBase {
    pathParams: BaggageTripAndContactPathParams;
    headers: BaggageTripAndContactHeaders;
    security: BaggageTripAndContactSecurity;
}
export declare class BaggageTripAndContactResponse extends SpeakeasyBase {
    baggageTripAndContact200ApplicationJsonString?: string;
    contentType: string;
    statusCode: number;
}
