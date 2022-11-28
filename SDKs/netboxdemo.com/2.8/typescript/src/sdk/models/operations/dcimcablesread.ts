import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimCablesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimCablesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimCablesReadPathParams;
}


export class DcimCablesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cable?: shared.Cable;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
