import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsProvidersUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsProvidersUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProviderInput;
}


export class CircuitsProvidersUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  provider?: shared.Provider;

  @SpeakeasyMetadata()
  statusCode: number;
}
