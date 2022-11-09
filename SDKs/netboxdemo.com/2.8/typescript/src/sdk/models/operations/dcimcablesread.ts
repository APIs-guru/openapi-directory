import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimCablesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimCablesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimCablesReadPathParams;
}


export class DcimCablesReadResponse extends SpeakeasyBase {
  @Metadata()
  cable?: shared.Cable;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
