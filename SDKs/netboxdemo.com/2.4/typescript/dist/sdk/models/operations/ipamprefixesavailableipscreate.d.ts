import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesAvailableIpsCreatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesAvailableIpsCreateRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesAvailableIpsCreatePathParams;
    request: shared.WritablePrefixInput;
}
export declare class IpamPrefixesAvailableIpsCreateResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
}
