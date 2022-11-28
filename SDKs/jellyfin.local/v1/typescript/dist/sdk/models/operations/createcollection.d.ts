import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCollectionQueryParams extends SpeakeasyBase {
    ids?: string[];
    isLocked?: boolean;
    name?: string;
    parentId?: string;
}
export declare class CreateCollectionSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateCollectionRequest extends SpeakeasyBase {
    queryParams: CreateCollectionQueryParams;
    security: CreateCollectionSecurity;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    collectionCreationResult?: shared.CollectionCreationResult;
    contentType: string;
    statusCode: number;
}
