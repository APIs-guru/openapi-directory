import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegionsHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetRegionsRequest extends SpeakeasyBase {
    headers: GetRegionsHeaders;
}
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    getRegionsResponse?: shared.GetRegionsResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
