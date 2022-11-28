import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmAuthenticationFlowsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmAuthenticationFlowsIdRequest extends SpeakeasyBase {
    pathParams: PutRealmAuthenticationFlowsIdPathParams;
    request: shared.AuthenticationFlowRepresentation;
}
export declare class PutRealmAuthenticationFlowsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
