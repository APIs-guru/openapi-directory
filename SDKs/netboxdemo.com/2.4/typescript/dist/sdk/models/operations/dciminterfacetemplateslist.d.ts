import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    formFactor?: string;
    limit?: number;
    mgmtOnly?: string;
    name?: string;
    offset?: number;
}
export declare class DcimInterfaceTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InterfaceTemplate[];
}
export declare class DcimInterfaceTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimInterfaceTemplatesListQueryParams;
}
export declare class DcimInterfaceTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimInterfaceTemplatesList200ApplicationJsonObject?: DcimInterfaceTemplatesList200ApplicationJson;
}
