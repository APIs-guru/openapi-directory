import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateServicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    pathParams: UpdateServicePathParams;
    request: shared.ServiceInput;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
