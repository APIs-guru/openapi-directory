import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsProvidersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsProvidersReadPathParams;
}


export class CircuitsProvidersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  provider?: shared.Provider;

  @SpeakeasyMetadata()
  statusCode: number;
}
