import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesReadRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesReadPathParams;
}
export declare class IpamPrefixesReadResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
}
