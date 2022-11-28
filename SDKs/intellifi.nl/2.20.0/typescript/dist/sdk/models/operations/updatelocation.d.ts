import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLocationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateLocationRequest extends SpeakeasyBase {
    pathParams: UpdateLocationPathParams;
    request: shared.LocationInput;
}
export declare class UpdateLocationResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
