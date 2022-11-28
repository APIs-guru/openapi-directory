import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";



export class ObError1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}
