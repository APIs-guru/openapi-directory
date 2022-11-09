import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVVersionAreasAreaIdsPathParams extends SpeakeasyBase {
    areaIds: string;
    version: string;
}
export declare class GetVVersionAreasAreaIdsRequest extends SpeakeasyBase {
    pathParams: GetVVersionAreasAreaIdsPathParams;
}
export declare class GetVVersionAreasAreaIdsResponse extends SpeakeasyBase {
    areaResponse?: shared.AreaResponse;
    contentType: string;
    statusCode: number;
}
