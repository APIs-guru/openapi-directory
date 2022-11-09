import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ObError1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @Metadata({ data: "json, name=Message" })
  message: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
