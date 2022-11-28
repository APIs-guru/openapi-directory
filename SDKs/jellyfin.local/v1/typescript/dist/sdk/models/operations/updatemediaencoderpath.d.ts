import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMediaEncoderPathRequests extends SpeakeasyBase {
    mediaEncoderPathDto?: shared.MediaEncoderPathDto;
    mediaEncoderPathDto1?: shared.MediaEncoderPathDto;
    mediaEncoderPathDto2?: shared.MediaEncoderPathDto;
}
export declare class UpdateMediaEncoderPathSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateMediaEncoderPathRequest extends SpeakeasyBase {
    request: UpdateMediaEncoderPathRequests;
    security: UpdateMediaEncoderPathSecurity;
}
export declare class UpdateMediaEncoderPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
