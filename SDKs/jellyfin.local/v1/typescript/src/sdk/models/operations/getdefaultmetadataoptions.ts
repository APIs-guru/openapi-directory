import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDefaultMetadataOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultMetadataOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDefaultMetadataOptionsSecurity;
}


export class GetDefaultMetadataOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metadataOptions?: shared.MetadataOptions;

  @SpeakeasyMetadata()
  statusCode: number;
}
