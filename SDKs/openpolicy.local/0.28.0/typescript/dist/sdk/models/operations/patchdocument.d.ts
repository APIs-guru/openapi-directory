import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchDocumentPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PatchDocumentRequest extends SpeakeasyBase {
    pathParams: PatchDocumentPathParams;
    request: shared.PatchesSchema[];
}
export declare class PatchDocumentResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
}
