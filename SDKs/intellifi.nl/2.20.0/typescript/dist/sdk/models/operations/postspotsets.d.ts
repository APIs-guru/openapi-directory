import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSpotsetsRequest extends SpeakeasyBase {
    request: shared.SpotSetCreateInput;
}
export declare class PostSpotsetsResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
