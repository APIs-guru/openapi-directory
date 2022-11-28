import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPathParams extends SpeakeasyBase {
    chapterNumber: number;
}
export declare class GetRequest extends SpeakeasyBase {
    pathParams: GetPathParams;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMayChapterOverview?: shared.ErskineMayChapterOverview;
    statusCode: number;
}
