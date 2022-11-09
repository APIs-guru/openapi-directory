import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllLinesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllLinesRequest extends SpeakeasyBase {
  @Metadata()
  security: AllLinesSecurity;
}


export class AllLinesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  environment?: string;

  @Metadata()
  statusCode: number;
}
