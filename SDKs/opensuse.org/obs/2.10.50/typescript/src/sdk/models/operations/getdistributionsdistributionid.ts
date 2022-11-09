import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistributionsDistributionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=distribution_id" })
  distributionId: number;
}


export class GetDistributionsDistributionIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetDistributionsDistributionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistributionsDistributionIdPathParams;

  @Metadata()
  security: GetDistributionsDistributionIdSecurity;
}


export class GetDistributionsDistributionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
