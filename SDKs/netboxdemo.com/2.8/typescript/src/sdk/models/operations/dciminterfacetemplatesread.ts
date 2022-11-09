import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceTemplatesReadPathParams;
}


export class DcimInterfaceTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interfaceTemplate?: shared.InterfaceTemplate;

  @Metadata()
  statusCode: number;
}
