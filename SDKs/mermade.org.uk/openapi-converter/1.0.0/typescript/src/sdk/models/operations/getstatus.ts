import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatus200ApplicationJsonAny?: any;
}
