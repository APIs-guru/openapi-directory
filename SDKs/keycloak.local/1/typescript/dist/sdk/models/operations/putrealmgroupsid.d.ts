import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmGroupsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmGroupsIdRequest extends SpeakeasyBase {
    pathParams: PutRealmGroupsIdPathParams;
    request: shared.GroupRepresentation;
}
export declare class PutRealmGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
