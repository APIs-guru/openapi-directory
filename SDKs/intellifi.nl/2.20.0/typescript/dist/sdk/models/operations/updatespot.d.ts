import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSpotPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateSpotRequest extends SpeakeasyBase {
    pathParams: UpdateSpotPathParams;
    request: shared.SpotUpdateInput;
}
export declare class UpdateSpotResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
