import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStatus200ApplicationJsonAny?: any;
}
