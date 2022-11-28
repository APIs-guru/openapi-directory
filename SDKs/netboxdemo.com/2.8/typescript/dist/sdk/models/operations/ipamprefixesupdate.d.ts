import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesUpdateRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesUpdatePathParams;
    request: shared.WritablePrefixInput;
}
export declare class IpamPrefixesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
}
