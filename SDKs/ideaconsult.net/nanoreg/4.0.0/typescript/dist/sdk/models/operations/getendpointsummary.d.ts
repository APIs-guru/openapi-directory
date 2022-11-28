import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEndpointSummaryPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
}
export declare enum GetEndpointSummaryTopEnum {
    PChem = "P-CHEM",
    Ecotox = "ECOTOX",
    EnvFate = "ENV FATE",
    Tox = "TOX",
    Exposure = "EXPOSURE"
}
export declare class GetEndpointSummaryQueryParams extends SpeakeasyBase {
    category?: string;
    top?: GetEndpointSummaryTopEnum;
}
export declare class GetEndpointSummaryRequest extends SpeakeasyBase {
    pathParams: GetEndpointSummaryPathParams;
    queryParams: GetEndpointSummaryQueryParams;
}
export declare class GetEndpointSummaryResponse extends SpeakeasyBase {
    contentType: string;
    facet?: shared.Facet;
    statusCode: number;
}
