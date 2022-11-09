import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDefaultMetadataOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultMetadataOptionsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDefaultMetadataOptionsSecurity;
}


export class GetDefaultMetadataOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  metadataOptions?: shared.MetadataOptions;

  @Metadata()
  statusCode: number;
}
