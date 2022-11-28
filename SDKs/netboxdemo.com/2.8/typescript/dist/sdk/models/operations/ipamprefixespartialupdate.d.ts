import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesPartialUpdatePathParams;
    request: shared.WritablePrefixInput;
}
export declare class IpamPrefixesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
}
