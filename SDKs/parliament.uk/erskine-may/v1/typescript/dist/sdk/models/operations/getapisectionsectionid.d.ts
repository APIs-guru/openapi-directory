import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiSectionSectionIdPathParams extends SpeakeasyBase {
    sectionId: number;
}
export declare class GetApiSectionSectionIdRequest extends SpeakeasyBase {
    pathParams: GetApiSectionSectionIdPathParams;
}
export declare class GetApiSectionSectionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySectionDetail?: shared.ErskineMaySectionDetail;
    statusCode: number;
}
