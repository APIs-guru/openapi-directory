import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesCreateRequest extends SpeakeasyBase {
    request: shared.WritablePrefixInput;
}
export declare class IpamPrefixesCreateResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
}
