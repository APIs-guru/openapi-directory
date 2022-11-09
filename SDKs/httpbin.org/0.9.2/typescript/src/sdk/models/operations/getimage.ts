import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
