import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhysicalPathsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPhysicalPathsRequest extends SpeakeasyBase {
    security: GetPhysicalPathsSecurity;
}
export declare class GetPhysicalPathsResponse extends SpeakeasyBase {
    contentType: string;
    getPhysicalPaths200ApplicationJsonStrings?: string[];
    statusCode: number;
}
