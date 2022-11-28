import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParagraphSectionIdPathParams extends SpeakeasyBase {
    reference: string;
}
export declare class GetParagraphSectionIdRequest extends SpeakeasyBase {
    pathParams: GetParagraphSectionIdPathParams;
}
export declare class GetParagraphSectionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySectionOverview?: shared.ErskineMaySectionOverview;
    statusCode: number;
}
