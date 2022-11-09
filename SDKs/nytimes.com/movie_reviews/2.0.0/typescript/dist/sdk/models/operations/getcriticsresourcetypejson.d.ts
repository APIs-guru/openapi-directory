import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCriticsResourceTypeJsonPathParams extends SpeakeasyBase {
    resourceType: string;
}
export declare class GetCriticsResourceTypeJsonRequest extends SpeakeasyBase {
    pathParams: GetCriticsResourceTypeJsonPathParams;
}
export declare class GetCriticsResourceTypeJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Critic[];
    status?: string;
}
export declare class GetCriticsResourceTypeJsonResponse extends SpeakeasyBase {
    contentType: string;
    getCriticsResourceTypeJson200ApplicationJsonObject?: GetCriticsResourceTypeJson200ApplicationJson;
    statusCode: number;
}
