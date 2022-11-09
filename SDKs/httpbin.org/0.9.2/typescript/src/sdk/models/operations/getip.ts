import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
