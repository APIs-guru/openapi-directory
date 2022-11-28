import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GrpcRouteHeaderMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Exact = "EXACT",
    RegularExpression = "REGULAR_EXPRESSION"
}
/**
 * A match against a collection of headers.
**/
export declare class GrpcRouteHeaderMatch extends SpeakeasyBase {
    key?: string;
    type?: GrpcRouteHeaderMatchTypeEnum;
    value?: string;
}
