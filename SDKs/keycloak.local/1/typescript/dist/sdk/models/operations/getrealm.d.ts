import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmRequest extends SpeakeasyBase {
    pathParams: GetRealmPathParams;
}
export declare class GetRealmResponse extends SpeakeasyBase {
    contentType: string;
    realmRepresentation?: shared.RealmRepresentation;
    statusCode: number;
}
