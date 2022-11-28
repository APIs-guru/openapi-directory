import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEvidenceFilterQueryParams extends SpeakeasyBase {
    dataSource?: string;
    datastructure?: string;
    datatype?: string;
    disease?: string;
    fields?: string;
    format?: string;
    from?: number;
    pathway?: string;
    scorevalueMax?: number;
    scorevalueMin?: number;
    size?: number;
    sort?: string;
    target?: string;
    uniprotkw?: string;
}
export declare class GetEvidenceFilterRequest extends SpeakeasyBase {
    queryParams: GetEvidenceFilterQueryParams;
}
export declare class GetEvidenceFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
