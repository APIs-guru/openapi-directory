import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateServiceTransferRequestBody extends SpeakeasyBase {
    entities: shared.Entities;
}
export declare class CreateServiceTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateServiceTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateServiceTransferRequest extends SpeakeasyBase {
    request?: CreateServiceTransferRequestBody;
    security: CreateServiceTransferSecurity;
}
export declare class CreateServiceTransferResponse extends SpeakeasyBase {
    contentType: string;
    serviceTransfer?: shared.ServiceTransfer;
    statusCode: number;
    createServiceTransferDefaultApplicationJsonObject?: CreateServiceTransferDefaultApplicationJson;
}
