import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUsersUserEmailTransferPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class PatchUsersUserEmailTransferRequest extends SpeakeasyBase {
    pathParams: PatchUsersUserEmailTransferPathParams;
    request: shared.TransferRequest;
}
export declare class PatchUsersUserEmailTransferResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
