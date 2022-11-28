import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistributionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetDistributionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDistributionsSecurity;
}


export class GetDistributionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
