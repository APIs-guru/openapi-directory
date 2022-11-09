import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsProvidersPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsProvidersPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Provider;
}


export class CircuitsProvidersPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  provider?: shared.Provider;

  @Metadata()
  statusCode: number;
}
