import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTunerHostQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class DeleteTunerHostSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteTunerHostRequest extends SpeakeasyBase {
    queryParams: DeleteTunerHostQueryParams;
    security: DeleteTunerHostSecurity;
}
export declare class DeleteTunerHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
