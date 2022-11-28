import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmKeysPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmKeysRequest extends SpeakeasyBase {
    pathParams: GetRealmKeysPathParams;
}
export declare class GetRealmKeysResponse extends SpeakeasyBase {
    contentType: string;
    keysMetadataRepresentation?: shared.KeysMetadataRepresentation;
    statusCode: number;
}
