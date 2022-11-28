import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBlobPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteBlobRequest extends SpeakeasyBase {
    pathParams: DeleteBlobPathParams;
}
export declare class DeleteBlobResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
