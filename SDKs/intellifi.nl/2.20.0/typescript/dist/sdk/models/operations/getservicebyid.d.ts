import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServiceByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetServiceByIdRequest extends SpeakeasyBase {
    pathParams: GetServiceByIdPathParams;
}
export declare class GetServiceByIdResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
