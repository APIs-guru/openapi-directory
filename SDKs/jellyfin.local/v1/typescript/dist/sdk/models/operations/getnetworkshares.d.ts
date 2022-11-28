import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNetworkSharesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNetworkSharesRequest extends SpeakeasyBase {
    security: GetNetworkSharesSecurity;
}
export declare class GetNetworkSharesResponse extends SpeakeasyBase {
    contentType: string;
    fileSystemEntryInfos?: shared.FileSystemEntryInfo[];
    statusCode: number;
}
