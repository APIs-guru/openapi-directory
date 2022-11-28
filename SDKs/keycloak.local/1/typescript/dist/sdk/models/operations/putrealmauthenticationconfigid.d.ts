import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmAuthenticationConfigIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
    pathParams: PutRealmAuthenticationConfigIdPathParams;
    request: shared.AuthenticatorConfigRepresentation;
}
export declare class PutRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
