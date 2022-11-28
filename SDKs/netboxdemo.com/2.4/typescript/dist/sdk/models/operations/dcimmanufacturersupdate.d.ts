import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimManufacturersUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimManufacturersUpdateRequest extends SpeakeasyBase {
    pathParams: DcimManufacturersUpdatePathParams;
    request: shared.ManufacturerInput;
}
export declare class DcimManufacturersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    manufacturer?: shared.Manufacturer;
    statusCode: number;
}
