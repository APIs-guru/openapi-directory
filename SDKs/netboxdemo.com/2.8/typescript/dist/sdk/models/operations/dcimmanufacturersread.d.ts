import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimManufacturersReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimManufacturersReadRequest extends SpeakeasyBase {
    pathParams: DcimManufacturersReadPathParams;
}
export declare class DcimManufacturersReadResponse extends SpeakeasyBase {
    contentType: string;
    manufacturer?: shared.Manufacturer;
    statusCode: number;
}
