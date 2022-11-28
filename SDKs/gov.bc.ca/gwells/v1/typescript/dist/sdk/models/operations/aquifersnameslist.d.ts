import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquifersNamesListQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class AquifersNamesListRequest extends SpeakeasyBase {
    queryParams: AquifersNamesListQueryParams;
}
export declare class AquifersNamesListResponse extends SpeakeasyBase {
    aquiferSerializerBasics?: shared.AquiferSerializerBasic[];
    contentType: string;
    statusCode: number;
}
