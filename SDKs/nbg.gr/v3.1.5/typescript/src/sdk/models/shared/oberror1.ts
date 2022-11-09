import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


export class ObError1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode: ErrorCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;
}
