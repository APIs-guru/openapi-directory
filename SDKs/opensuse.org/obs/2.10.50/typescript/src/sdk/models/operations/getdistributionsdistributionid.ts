import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistributionsDistributionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=distribution_id" })
  distributionId: number;
}


export class GetDistributionsDistributionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetDistributionsDistributionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistributionsDistributionIdPathParams;

  @SpeakeasyMetadata()
  security: GetDistributionsDistributionIdSecurity;
}


export class GetDistributionsDistributionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
