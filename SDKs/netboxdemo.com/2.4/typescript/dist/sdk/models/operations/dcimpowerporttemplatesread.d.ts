import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortTemplatesReadPathParams;
}
export declare class DcimPowerPortTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    powerPortTemplate?: shared.PowerPortTemplate;
    statusCode: number;
}
