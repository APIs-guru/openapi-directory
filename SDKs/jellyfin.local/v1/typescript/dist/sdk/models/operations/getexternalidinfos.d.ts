import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExternalIdInfosPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetExternalIdInfosSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetExternalIdInfosRequest extends SpeakeasyBase {
    pathParams: GetExternalIdInfosPathParams;
    security: GetExternalIdInfosSecurity;
}
export declare class GetExternalIdInfosResponse extends SpeakeasyBase {
    contentType: string;
    externalIdInfos?: shared.ExternalIdInfo[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
