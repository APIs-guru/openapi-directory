import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubstancesPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
}
export declare enum GetSubstancesTypeEnum {
    Substancetype = "substancetype",
    Name = "name",
    Like = "like",
    Regexp = "regexp",
    Uuif = "uuif",
    CompTox = "CompTox",
    Doi = "DOI",
    Reliability = "reliability",
    PurposeFlag = "purposeFlag",
    StudyResultType = "studyResultType",
    IsRobustStudy = "isRobustStudy",
    Citation = "citation",
    Citationowner = "citationowner",
    Topcategory = "topcategory",
    Endpointcategory = "endpointcategory",
    Params = "params",
    OwnerName = "owner_name",
    OwnerUuid = "owner_uuid",
    Related = "related",
    Reference = "reference",
    Facet = "facet"
}
export declare class GetSubstancesQueryParams extends SpeakeasyBase {
    addDummySubstance?: boolean;
    bundleUri?: string;
    compoundUri?: string;
    page?: number;
    pagesize?: number;
    search?: string;
    studysummary?: boolean;
    type?: GetSubstancesTypeEnum;
}
export declare class GetSubstancesRequest extends SpeakeasyBase {
    pathParams: GetSubstancesPathParams;
    queryParams: GetSubstancesQueryParams;
}
export declare class GetSubstancesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    substance?: shared.Substance;
}
