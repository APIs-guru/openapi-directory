import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GrpcRouteMethodMatchTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Exact = "EXACT",
    RegularExpression = "REGULAR_EXPRESSION"
}
/**
 * Specifies a match against a method.
**/
export declare class GrpcRouteMethodMatch extends SpeakeasyBase {
    caseSensitive?: boolean;
    grpcMethod?: string;
    grpcService?: string;
    type?: GrpcRouteMethodMatchTypeEnum;
}
