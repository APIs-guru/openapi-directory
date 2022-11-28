import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamAggregatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamAggregatesUpdateRequest extends SpeakeasyBase {
    pathParams: IpamAggregatesUpdatePathParams;
    request: shared.WritableAggregateInput;
}
export declare class IpamAggregatesUpdateResponse extends SpeakeasyBase {
    aggregate?: shared.Aggregate;
    contentType: string;
    statusCode: number;
}
