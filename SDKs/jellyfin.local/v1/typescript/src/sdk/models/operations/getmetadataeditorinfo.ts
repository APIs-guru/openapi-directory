import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMetadataEditorInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetMetadataEditorInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMetadataEditorInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMetadataEditorInfoPathParams;

  @SpeakeasyMetadata()
  security: GetMetadataEditorInfoSecurity;
}


export class GetMetadataEditorInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metadataEditorInfo?: shared.MetadataEditorInfo;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
