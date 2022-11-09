import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImagePngResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
