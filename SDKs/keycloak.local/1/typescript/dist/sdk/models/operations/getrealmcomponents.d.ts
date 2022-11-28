import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmComponentsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmComponentsQueryParams extends SpeakeasyBase {
    name?: string;
    parent?: string;
    type?: string;
}
export declare class GetRealmComponentsRequest extends SpeakeasyBase {
    pathParams: GetRealmComponentsPathParams;
    queryParams: GetRealmComponentsQueryParams;
}
export declare class GetRealmComponentsResponse extends SpeakeasyBase {
    componentRepresentations?: shared.ComponentRepresentation[];
    contentType: string;
    statusCode: number;
}
