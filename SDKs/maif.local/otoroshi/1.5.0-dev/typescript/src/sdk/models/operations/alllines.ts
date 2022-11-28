import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllLinesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllLinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AllLinesSecurity;
}


export class AllLinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  environment?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
