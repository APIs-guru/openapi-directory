import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSystemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSystem200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
