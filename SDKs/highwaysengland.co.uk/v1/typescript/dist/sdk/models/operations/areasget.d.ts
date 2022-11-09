import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AreasGetPathParams extends SpeakeasyBase {
    version: string;
}
export declare class AreasGetRequest extends SpeakeasyBase {
    pathParams: AreasGetPathParams;
}
export declare class AreasGetResponse extends SpeakeasyBase {
    areaResponse?: shared.AreaResponse;
    contentType: string;
    statusCode: number;
}
