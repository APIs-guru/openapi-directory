import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSpotListRequest extends SpeakeasyBase {
    request: shared.ItemListInput;
}
export declare class AddSpotListResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
