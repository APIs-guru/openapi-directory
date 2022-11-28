import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfacesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInterfacesReadPathParams;
}


export class DcimInterfacesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  interface?: shared.Interface;

  @SpeakeasyMetadata()
  statusCode: number;
}
