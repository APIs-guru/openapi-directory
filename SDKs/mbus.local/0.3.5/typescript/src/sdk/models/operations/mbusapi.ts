import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MbusApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  textError?: string;

  @Metadata()
  yaml?: string;
}
