import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NavigatePathParams extends SpeakeasyBase {
    sectionId: number;
    step: number;
}
export declare class NavigateRequest extends SpeakeasyBase {
    pathParams: NavigatePathParams;
}
export declare class NavigateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMaySectionOverview?: shared.ErskineMaySectionOverview;
    statusCode: number;
}
