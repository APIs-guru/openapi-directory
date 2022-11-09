import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfacesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfacesReadPathParams;
}


export class DcimInterfacesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interface?: shared.Interface;

  @Metadata()
  statusCode: number;
}
