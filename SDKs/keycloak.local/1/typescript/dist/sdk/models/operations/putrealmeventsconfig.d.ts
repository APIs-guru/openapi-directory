import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmEventsConfigPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PutRealmEventsConfigRequest extends SpeakeasyBase {
    pathParams: PutRealmEventsConfigPathParams;
    request: shared.RealmEventsConfigRepresentation;
}
export declare class PutRealmEventsConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
