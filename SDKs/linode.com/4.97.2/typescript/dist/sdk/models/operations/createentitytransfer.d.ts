import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEntityTransferRequestBody extends SpeakeasyBase {
    entities: shared.Entities;
}
export declare class CreateEntityTransferSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateEntityTransferDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateEntityTransferRequest extends SpeakeasyBase {
    request?: CreateEntityTransferRequestBody;
    security: CreateEntityTransferSecurity;
}
export declare class CreateEntityTransferResponse extends SpeakeasyBase {
    contentType: string;
    entityTransfer?: shared.EntityTransfer;
    statusCode: number;
    createEntityTransferDefaultApplicationJsonObject?: CreateEntityTransferDefaultApplicationJson;
}
