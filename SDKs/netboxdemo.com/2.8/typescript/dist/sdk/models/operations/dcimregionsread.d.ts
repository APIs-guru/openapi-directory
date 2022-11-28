import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRegionsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRegionsReadRequest extends SpeakeasyBase {
    pathParams: DcimRegionsReadPathParams;
}
export declare class DcimRegionsReadResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
