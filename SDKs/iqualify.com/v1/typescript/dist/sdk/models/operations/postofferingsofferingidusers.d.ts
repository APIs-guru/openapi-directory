import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
    offeringId: string;
}
export declare class PostOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
    pathParams: PostOfferingsOfferingIdUsersPathParams;
    request: shared.OfferingUser[];
}
export declare class PostOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    offeringUserAddResponses?: shared.OfferingUserAddResponse[];
    postOfferingsOfferingIdUsers207ApplicationJsonOneoves?: any[];
    statusCode: number;
}
