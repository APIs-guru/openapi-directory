import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesAvailableIpsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesAvailableIpsReadRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesAvailableIpsReadPathParams;
}
export declare class IpamPrefixesAvailableIpsReadResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
}
