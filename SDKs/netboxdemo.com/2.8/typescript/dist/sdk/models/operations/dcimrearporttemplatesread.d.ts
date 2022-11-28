import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimRearPortTemplatesReadPathParams;
}
export declare class DcimRearPortTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    rearPortTemplate?: shared.RearPortTemplate;
    statusCode: number;
}
