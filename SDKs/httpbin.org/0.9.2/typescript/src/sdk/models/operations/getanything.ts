import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
