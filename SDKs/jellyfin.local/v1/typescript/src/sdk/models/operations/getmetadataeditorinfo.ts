import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMetadataEditorInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetMetadataEditorInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMetadataEditorInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMetadataEditorInfoPathParams;

  @Metadata()
  security: GetMetadataEditorInfoSecurity;
}


export class GetMetadataEditorInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  metadataEditorInfo?: shared.MetadataEditorInfo;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
