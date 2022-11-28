import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAssociationFilterQueryParams extends SpeakeasyBase {
    datasource?: string;
    datastructure?: string;
    datatype?: string;
    direct?: boolean;
    disease?: string;
    facets?: boolean;
    fields?: string;
    format?: string;
    from?: number;
    pathway?: string;
    scorevalueMax?: number;
    scorevalueMin?: number;
    scorevalueTypes?: string;
    search?: string;
    size?: number;
    sort?: string;
    target?: string;
    targetClass?: string;
    therapeuticArea?: string;
    uniprotkw?: string;
}
export declare class GetAssociationFilterRequest extends SpeakeasyBase {
    queryParams: GetAssociationFilterQueryParams;
}
export declare class GetAssociationFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
