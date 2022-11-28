import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmComponentsIdSubComponentTypesPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmComponentsIdSubComponentTypesQueryParams extends SpeakeasyBase {
    type?: string;
}
export declare class GetRealmComponentsIdSubComponentTypesRequest extends SpeakeasyBase {
    pathParams: GetRealmComponentsIdSubComponentTypesPathParams;
    queryParams: GetRealmComponentsIdSubComponentTypesQueryParams;
}
export declare class GetRealmComponentsIdSubComponentTypesResponse extends SpeakeasyBase {
    componentTypeRepresentations?: shared.ComponentTypeRepresentation[];
    contentType: string;
    statusCode: number;
}
