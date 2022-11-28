import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionStatusShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
