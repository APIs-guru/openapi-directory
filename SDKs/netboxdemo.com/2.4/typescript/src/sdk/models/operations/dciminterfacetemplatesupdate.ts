import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterfaceTemplate;
}


export class DcimInterfaceTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interfaceTemplate?: shared.InterfaceTemplate;

  @Metadata()
  statusCode: number;
}
