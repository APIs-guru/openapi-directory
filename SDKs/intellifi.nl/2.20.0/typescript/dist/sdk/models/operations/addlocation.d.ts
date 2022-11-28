import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLocationRequest extends SpeakeasyBase {
    request: shared.LocationInput;
}
export declare class AddLocationResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
