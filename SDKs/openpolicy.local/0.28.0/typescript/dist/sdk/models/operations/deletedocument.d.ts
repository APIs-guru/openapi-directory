import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDocumentPathParams extends SpeakeasyBase {
    path: string;
}
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    pathParams: DeleteDocumentPathParams;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
}
