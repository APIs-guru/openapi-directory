import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFromCollectionPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class RemoveFromCollectionQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class RemoveFromCollectionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RemoveFromCollectionRequest extends SpeakeasyBase {
    pathParams: RemoveFromCollectionPathParams;
    queryParams: RemoveFromCollectionQueryParams;
    security: RemoveFromCollectionSecurity;
}
export declare class RemoveFromCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
