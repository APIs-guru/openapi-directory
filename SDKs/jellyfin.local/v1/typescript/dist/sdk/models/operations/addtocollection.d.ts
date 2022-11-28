import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddToCollectionPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class AddToCollectionQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class AddToCollectionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddToCollectionRequest extends SpeakeasyBase {
    pathParams: AddToCollectionPathParams;
    queryParams: AddToCollectionQueryParams;
    security: AddToCollectionSecurity;
}
export declare class AddToCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
