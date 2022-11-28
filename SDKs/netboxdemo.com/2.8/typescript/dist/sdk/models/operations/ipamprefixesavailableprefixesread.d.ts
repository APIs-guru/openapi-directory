import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesAvailablePrefixesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesAvailablePrefixesReadRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesAvailablePrefixesReadPathParams;
}
export declare class IpamPrefixesAvailablePrefixesReadResponse extends SpeakeasyBase {
    availablePrefixes?: shared.AvailablePrefix[];
    contentType: string;
    statusCode: number;
}
