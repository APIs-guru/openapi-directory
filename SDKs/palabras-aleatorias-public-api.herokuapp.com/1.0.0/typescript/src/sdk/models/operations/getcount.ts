import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
