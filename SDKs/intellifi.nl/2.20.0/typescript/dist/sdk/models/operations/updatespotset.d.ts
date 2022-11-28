import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSpotSetPathParams extends SpeakeasyBase {
    id: string;
    setId: string;
}
export declare class UpdateSpotSetRequest extends SpeakeasyBase {
    pathParams: UpdateSpotSetPathParams;
    request: shared.SpotSetUpdate;
}
export declare class UpdateSpotSetResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
