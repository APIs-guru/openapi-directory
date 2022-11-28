import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not supported by Cloud Run GRPCAction describes an action involving a GRPC port.
**/
export declare class GrpcAction extends SpeakeasyBase {
    port?: number;
    service?: string;
}
