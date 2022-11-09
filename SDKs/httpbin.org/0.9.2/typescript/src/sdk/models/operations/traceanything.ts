import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TraceAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
