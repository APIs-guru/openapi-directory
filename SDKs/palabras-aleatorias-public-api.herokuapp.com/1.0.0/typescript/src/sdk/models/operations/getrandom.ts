import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRandomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
