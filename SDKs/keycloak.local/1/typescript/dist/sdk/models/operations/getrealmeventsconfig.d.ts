import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmEventsConfigPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmEventsConfigRequest extends SpeakeasyBase {
    pathParams: GetRealmEventsConfigPathParams;
}
export declare class GetRealmEventsConfigResponse extends SpeakeasyBase {
    contentType: string;
    realmEventsConfigRepresentation?: shared.RealmEventsConfigRepresentation;
    statusCode: number;
}
