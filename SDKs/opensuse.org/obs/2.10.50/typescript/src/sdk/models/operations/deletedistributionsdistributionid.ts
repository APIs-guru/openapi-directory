import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDistributionsDistributionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=distribution_id" })
  distributionId: number;
}


export class DeleteDistributionsDistributionIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteDistributionsDistributionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDistributionsDistributionIdPathParams;

  @Metadata()
  security: DeleteDistributionsDistributionIdSecurity;
}


export class DeleteDistributionsDistributionIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
