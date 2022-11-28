import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceTypesListQueryParams extends SpeakeasyBase {
    idIn?: string;
    isConsoleServer?: string;
    isFullDepth?: string;
    isNetworkDevice?: string;
    isPdu?: string;
    limit?: number;
    manufacturer?: string;
    manufacturerId?: string;
    model?: string;
    offset?: number;
    partNumber?: string;
    q?: string;
    slug?: string;
    subdeviceRole?: string;
    tag?: string;
    uHeight?: number;
}
export declare class DcimDeviceTypesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceType[];
}
export declare class DcimDeviceTypesListRequest extends SpeakeasyBase {
    queryParams: DcimDeviceTypesListQueryParams;
}
export declare class DcimDeviceTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimDeviceTypesList200ApplicationJsonObject?: DcimDeviceTypesList200ApplicationJson;
}
