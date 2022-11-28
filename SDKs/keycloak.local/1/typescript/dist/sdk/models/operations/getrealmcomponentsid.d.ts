import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmComponentsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmComponentsIdRequest extends SpeakeasyBase {
    pathParams: GetRealmComponentsIdPathParams;
}
export declare class GetRealmComponentsIdResponse extends SpeakeasyBase {
    componentRepresentation?: shared.ComponentRepresentation;
    contentType: string;
    statusCode: number;
}
