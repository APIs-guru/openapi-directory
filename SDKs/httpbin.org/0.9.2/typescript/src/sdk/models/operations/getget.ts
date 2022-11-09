import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
