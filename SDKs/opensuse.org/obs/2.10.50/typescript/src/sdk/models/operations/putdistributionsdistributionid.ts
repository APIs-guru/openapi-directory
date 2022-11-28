import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDistributionsDistributionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=distribution_id" })
  distributionId: number;
}


export class PutDistributionsDistributionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutDistributionsDistributionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDistributionsDistributionIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;

  @SpeakeasyMetadata()
  security: PutDistributionsDistributionIdSecurity;
}


export class PutDistributionsDistributionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
