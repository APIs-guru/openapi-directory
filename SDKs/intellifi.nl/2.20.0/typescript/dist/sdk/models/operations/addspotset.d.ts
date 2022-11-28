import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSpotSetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddSpotSetRequest extends SpeakeasyBase {
    pathParams: AddSpotSetPathParams;
    request: shared.SpotSetCreateInput;
}
export declare class AddSpotSetResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
