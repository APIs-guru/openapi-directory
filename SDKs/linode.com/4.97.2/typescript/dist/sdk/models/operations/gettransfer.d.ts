import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTransferRequest extends SpeakeasyBase {
    security: GetTransferSecurity;
}
export declare class GetTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transfer?: shared.Transfer;
    getTransferDefaultApplicationJsonObject?: GetTransferDefaultApplicationJson;
}
