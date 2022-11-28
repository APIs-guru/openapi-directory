import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDistributionsDistributionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=distribution_id" })
  distributionId: number;
}


export class DeleteDistributionsDistributionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteDistributionsDistributionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDistributionsDistributionIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteDistributionsDistributionIdSecurity;
}


export class DeleteDistributionsDistributionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
