import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsFutureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingMetadataResponse })
  offeringMetadataResponses?: shared.OfferingMetadataResponse[];

  @Metadata()
  statusCode: number;
}
