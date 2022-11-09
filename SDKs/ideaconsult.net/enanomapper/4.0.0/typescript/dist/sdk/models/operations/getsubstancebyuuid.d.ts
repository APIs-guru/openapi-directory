import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubstanceByUuidPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
    uuid: string;
}
export declare class GetSubstanceByUuidQueryParams extends SpeakeasyBase {
    page?: number;
    pagesize?: number;
    propertyUris?: string;
}
export declare class GetSubstanceByUuidRequest extends SpeakeasyBase {
    pathParams: GetSubstanceByUuidPathParams;
    queryParams: GetSubstanceByUuidQueryParams;
}
export declare class GetSubstanceByUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    substance?: shared.Substance;
}
