import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDistributionsDistributionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=distribution_id" })
  distributionId: number;
}


export class PutDistributionsDistributionIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutDistributionsDistributionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDistributionsDistributionIdPathParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;

  @Metadata()
  security: PutDistributionsDistributionIdSecurity;
}


export class PutDistributionsDistributionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
