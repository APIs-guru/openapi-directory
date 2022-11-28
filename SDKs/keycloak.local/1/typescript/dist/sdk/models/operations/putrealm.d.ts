import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PutRealmRequest extends SpeakeasyBase {
    pathParams: PutRealmPathParams;
    request: shared.RealmRepresentation;
}
export declare class PutRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
