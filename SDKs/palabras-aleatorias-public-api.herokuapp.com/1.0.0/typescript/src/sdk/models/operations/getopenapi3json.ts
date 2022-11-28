import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOpenapi3JsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
