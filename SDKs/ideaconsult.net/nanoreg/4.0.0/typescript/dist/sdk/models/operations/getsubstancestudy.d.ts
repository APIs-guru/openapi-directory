import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubstanceStudyPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
    uuid: string;
}
export declare enum GetSubstanceStudyTopEnum {
    PChem = "P-CHEM",
    Ecotox = "ECOTOX",
    EnvFate = "ENV FATE",
    Tox = "TOX",
    Exposure = "EXPOSURE"
}
export declare class GetSubstanceStudyQueryParams extends SpeakeasyBase {
    category?: string;
    investigationUuid?: string;
    page?: number;
    pagesize?: number;
    property?: string;
    propertyUri?: string;
    top?: GetSubstanceStudyTopEnum;
}
export declare class GetSubstanceStudyRequest extends SpeakeasyBase {
    pathParams: GetSubstanceStudyPathParams;
    queryParams: GetSubstanceStudyQueryParams;
}
export declare class GetSubstanceStudyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    substanceStudy?: shared.SubstanceStudy;
}
