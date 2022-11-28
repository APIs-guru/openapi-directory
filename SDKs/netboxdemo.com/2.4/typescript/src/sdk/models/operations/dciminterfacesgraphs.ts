import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfacesGraphsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesGraphsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInterfacesGraphsPathParams;
}


export class DcimInterfacesGraphsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  interface?: shared.Interface;

  @SpeakeasyMetadata()
  statusCode: number;
}
