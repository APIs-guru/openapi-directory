import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimManufacturersPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimManufacturersPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimManufacturersPartialUpdatePathParams;
    request: shared.ManufacturerInput;
}
export declare class DcimManufacturersPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    manufacturer?: shared.Manufacturer;
    statusCode: number;
}
