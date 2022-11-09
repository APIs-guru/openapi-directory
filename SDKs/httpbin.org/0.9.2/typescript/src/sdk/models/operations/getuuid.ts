import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
