import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamAggregatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableAggregateInput;
}
export declare class IpamAggregatesCreateResponse extends SpeakeasyBase {
    aggregate?: shared.Aggregate;
    contentType: string;
    statusCode: number;
}
