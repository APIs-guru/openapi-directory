import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleRpcStatus
/** 
 * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
**/
export class GoogleRpcStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}
