import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImageSvgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
