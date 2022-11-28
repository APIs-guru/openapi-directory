import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsProvidersGraphsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersGraphsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsProvidersGraphsPathParams;
}


export class CircuitsProvidersGraphsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  provider?: shared.Provider;

  @SpeakeasyMetadata()
  statusCode: number;
}
