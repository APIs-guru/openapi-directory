import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLocationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteLocationRequest extends SpeakeasyBase {
    pathParams: DeleteLocationPathParams;
}
export declare class DeleteLocationResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
