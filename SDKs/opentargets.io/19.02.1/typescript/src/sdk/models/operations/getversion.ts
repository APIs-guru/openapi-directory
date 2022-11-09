import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
