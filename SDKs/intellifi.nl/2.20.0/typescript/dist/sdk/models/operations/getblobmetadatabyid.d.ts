import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlobMetadataByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBlobMetadataByIdRequest extends SpeakeasyBase {
    pathParams: GetBlobMetadataByIdPathParams;
}
export declare class GetBlobMetadataByIdResponse extends SpeakeasyBase {
    blob?: shared.Blob;
    contentType: string;
    statusCode: number;
}
