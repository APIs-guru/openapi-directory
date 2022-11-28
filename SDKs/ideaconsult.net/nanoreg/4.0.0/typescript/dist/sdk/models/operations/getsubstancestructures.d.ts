import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubstanceStructuresPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
    uuid: string;
}
export declare class GetSubstanceStructuresQueryParams extends SpeakeasyBase {
    page?: number;
    pagesize?: number;
}
export declare class GetSubstanceStructuresRequest extends SpeakeasyBase {
    pathParams: GetSubstanceStructuresPathParams;
    queryParams: GetSubstanceStructuresQueryParams;
}
export declare class GetSubstanceStructuresResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
