import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmPartialImportPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmPartialImportRequest extends SpeakeasyBase {
    pathParams: PostRealmPartialImportPathParams;
    request: shared.PartialImportRepresentation;
}
export declare class PostRealmPartialImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
