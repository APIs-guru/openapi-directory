import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubstanceStudySummaryPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
    uuid: string;
}
export declare enum GetSubstanceStudySummaryTopEnum {
    PChem = "P-CHEM",
    Ecotox = "ECOTOX",
    EnvFate = "ENV FATE",
    Tox = "TOX",
    Exposure = "EXPOSURE"
}
export declare class GetSubstanceStudySummaryQueryParams extends SpeakeasyBase {
    category?: string;
    page?: number;
    pagesize?: number;
    property?: string;
    propertyUri?: string;
    result?: boolean;
    top?: GetSubstanceStudySummaryTopEnum;
}
export declare class GetSubstanceStudySummaryRequest extends SpeakeasyBase {
    pathParams: GetSubstanceStudySummaryPathParams;
    queryParams: GetSubstanceStudySummaryQueryParams;
}
export declare class GetSubstanceStudySummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    substanceStudySummary?: shared.SubstanceStudySummary;
}
