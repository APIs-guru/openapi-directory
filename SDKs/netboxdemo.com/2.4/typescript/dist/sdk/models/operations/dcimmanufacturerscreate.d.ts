import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimManufacturersCreateRequest extends SpeakeasyBase {
    request: shared.ManufacturerInput;
}
export declare class DcimManufacturersCreateResponse extends SpeakeasyBase {
    contentType: string;
    manufacturer?: shared.Manufacturer;
    statusCode: number;
}
