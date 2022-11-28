import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesAvailablePrefixesCreatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesAvailablePrefixesCreateRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesAvailablePrefixesCreatePathParams;
    request: shared.WritablePrefixInput;
}
export declare class IpamPrefixesAvailablePrefixesCreateResponse extends SpeakeasyBase {
    availablePrefixes?: shared.AvailablePrefix[];
    contentType: string;
    statusCode: number;
}
