import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDocumentPathParams extends SpeakeasyBase {
    path: string;
}
export declare class PutDocumentHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class PutDocumentRequest extends SpeakeasyBase {
    pathParams: PutDocumentPathParams;
    headers: PutDocumentHeaders;
}
export declare class PutDocumentResponse extends SpeakeasyBase {
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
}
