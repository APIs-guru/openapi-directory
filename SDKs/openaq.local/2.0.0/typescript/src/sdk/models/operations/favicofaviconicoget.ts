import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FavicoFaviconIcoGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  favicoFaviconIcoGet200ApplicationJsonAny?: any;
}
