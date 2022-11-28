import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddMediaPathQueryParams extends SpeakeasyBase {
    refreshLibrary?: boolean;
}
export declare class AddMediaPathRequests extends SpeakeasyBase {
    mediaPathDto?: shared.MediaPathDto;
    mediaPathDto1?: shared.MediaPathDto;
    mediaPathDto2?: shared.MediaPathDto;
}
export declare class AddMediaPathSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddMediaPathRequest extends SpeakeasyBase {
    queryParams: AddMediaPathQueryParams;
    request: AddMediaPathRequests;
    security: AddMediaPathSecurity;
}
export declare class AddMediaPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
