import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSpotListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSpotListRequest extends SpeakeasyBase {
    pathParams: DeleteSpotListPathParams;
}
export declare class DeleteSpotListResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
