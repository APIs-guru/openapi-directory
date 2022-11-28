import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamAggregatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamAggregatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamAggregatesPartialUpdatePathParams;
    request: shared.WritableAggregateInput;
}
export declare class IpamAggregatesPartialUpdateResponse extends SpeakeasyBase {
    aggregate?: shared.Aggregate;
    contentType: string;
    statusCode: number;
}
