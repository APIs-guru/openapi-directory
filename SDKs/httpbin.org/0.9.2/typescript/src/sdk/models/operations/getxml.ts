import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetXmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
