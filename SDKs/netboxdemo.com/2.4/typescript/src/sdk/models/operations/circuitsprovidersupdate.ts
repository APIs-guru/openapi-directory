import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsProvidersUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsProvidersUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Provider;
}


export class CircuitsProvidersUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  provider?: shared.Provider;

  @Metadata()
  statusCode: number;
}
