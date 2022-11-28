import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiDocsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
