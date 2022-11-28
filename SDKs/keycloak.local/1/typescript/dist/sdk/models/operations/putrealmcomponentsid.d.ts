import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmComponentsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmComponentsIdRequest extends SpeakeasyBase {
    pathParams: PutRealmComponentsIdPathParams;
    request: shared.ComponentRepresentation;
}
export declare class PutRealmComponentsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
