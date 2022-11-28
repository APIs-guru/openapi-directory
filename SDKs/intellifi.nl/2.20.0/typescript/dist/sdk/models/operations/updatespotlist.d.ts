import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSpotListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateSpotListRequest extends SpeakeasyBase {
    pathParams: UpdateSpotListPathParams;
    request: shared.SpotListInput;
}
export declare class UpdateSpotListResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
