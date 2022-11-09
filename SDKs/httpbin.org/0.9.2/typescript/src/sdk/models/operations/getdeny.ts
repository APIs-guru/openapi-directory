import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDenyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
