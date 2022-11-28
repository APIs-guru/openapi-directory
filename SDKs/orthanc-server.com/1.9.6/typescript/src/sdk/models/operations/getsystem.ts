import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSystem200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
