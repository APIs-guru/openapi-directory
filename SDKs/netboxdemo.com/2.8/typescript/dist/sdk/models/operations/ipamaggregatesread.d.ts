import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamAggregatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamAggregatesReadRequest extends SpeakeasyBase {
    pathParams: IpamAggregatesReadPathParams;
}
export declare class IpamAggregatesReadResponse extends SpeakeasyBase {
    aggregate?: shared.Aggregate;
    contentType: string;
    statusCode: number;
}
