import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegionPathParams extends SpeakeasyBase {
    regionId: string;
}
export declare class GetRegionDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetRegionRequest extends SpeakeasyBase {
    pathParams: GetRegionPathParams;
}
export declare class GetRegionResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
    getRegionDefaultApplicationJsonObject?: GetRegionDefaultApplicationJson;
}
